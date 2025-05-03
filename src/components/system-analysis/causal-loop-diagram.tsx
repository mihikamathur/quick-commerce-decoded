
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  category: 'consumer' | 'business' | 'environment' | 'labor';
};

type Link = {
  source: string;
  target: string;
  type: 'reinforcing' | 'balancing';
  label?: string;
};

type LoopType = {
  id: string;
  name: string;
  description: string;
  nodes: string[];
  type: 'reinforcing' | 'balancing';
};

export function CausalLoopDiagram() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedLoop, setSelectedLoop] = useState<string | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Define nodes for the causal loop diagram
  const nodes: Node[] = [
    { id: 'delivery_speed', label: 'Delivery Speed', x: 200, y: 100, category: 'business' },
    { id: 'consumer_satisfaction', label: 'Consumer Satisfaction', x: 350, y: 150, category: 'consumer' },
    { id: 'demand', label: 'Demand', x: 400, y: 250, category: 'consumer' },
    { id: 'delivery_volume', label: 'Delivery Volume', x: 300, y: 300, category: 'business' },
    { id: 'labor_pressure', label: 'Labor Pressure', x: 150, y: 250, category: 'labor' },
    { id: 'accidents', label: 'Accidents', x: 100, y: 350, category: 'labor' },
    { id: 'emissions', label: 'Emissions', x: 250, y: 400, category: 'environment' },
    { id: 'packaging_waste', label: 'Packaging Waste', x: 400, y: 350, category: 'environment' },
  ];

  // Scale nodes based on window width
  const scale = windowWidth < 768 ? 0.6 : windowWidth < 1024 ? 0.8 : 1;
  const scaledNodes = nodes.map(node => ({
    ...node,
    x: node.x * scale,
    y: node.y * scale
  }));

  // Define links between nodes
  const links: Link[] = [
    { source: 'delivery_speed', target: 'consumer_satisfaction', type: 'reinforcing' },
    { source: 'consumer_satisfaction', target: 'demand', type: 'reinforcing' },
    { source: 'demand', target: 'delivery_volume', type: 'reinforcing' },
    { source: 'delivery_volume', target: 'labor_pressure', type: 'reinforcing' },
    { source: 'labor_pressure', target: 'accidents', type: 'reinforcing' },
    { source: 'labor_pressure', target: 'delivery_speed', type: 'balancing', label: 'decreases' },
    { source: 'delivery_volume', target: 'emissions', type: 'reinforcing' },
    { source: 'delivery_volume', target: 'packaging_waste', type: 'reinforcing' },
    { source: 'packaging_waste', target: 'consumer_satisfaction', type: 'balancing', label: 'decreases' },
  ];

  // Define feedback loops
  const loops: LoopType[] = [
    {
      id: 'consumer_loop',
      name: 'Consumer Satisfaction Loop',
      description: 'Faster delivery increases consumer satisfaction, driving demand and creating a reinforcing cycle of growth.',
      nodes: ['delivery_speed', 'consumer_satisfaction', 'demand', 'delivery_volume'],
      type: 'reinforcing'
    },
    {
      id: 'labor_loop',
      name: 'Labor Pressure Loop',
      description: 'Higher delivery volumes increase pressure on workers, potentially decreasing delivery speed and creating a balancing loop.',
      nodes: ['delivery_volume', 'labor_pressure', 'delivery_speed'],
      type: 'balancing'
    },
    {
      id: 'environmental_loop',
      name: 'Environmental Impact Loop',
      description: 'Increased delivery volume generates more packaging waste, which may eventually decrease consumer satisfaction.',
      nodes: ['delivery_volume', 'packaging_waste', 'consumer_satisfaction', 'demand'],
      type: 'balancing'
    }
  ];

  const handleLoopClick = (loopId: string) => {
    setSelectedLoop(selectedLoop === loopId ? null : loopId);
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'consumer': return '#3b82f6'; // Blue
      case 'business': return '#8b5cf6'; // Purple
      case 'environment': return '#10b981'; // Green
      case 'labor': return '#f97316'; // Orange
      default: return '#64748b'; // Slate
    }
  };

  const isNodeInSelectedLoop = (nodeId: string) => {
    if (!selectedLoop) return true;
    const loop = loops.find(l => l.id === selectedLoop);
    return loop ? loop.nodes.includes(nodeId) : false;
  };

  const isLinkInSelectedLoop = (source: string, target: string) => {
    if (!selectedLoop) return true;
    const loop = loops.find(l => l.id === selectedLoop);
    if (!loop) return false;
    
    return loop.nodes.includes(source) && loop.nodes.includes(target) &&
      // Check if adjacent in the loop
      loop.nodes.findIndex(n => n === source) === (loop.nodes.findIndex(n => n === target) - 1 + loop.nodes.length) % loop.nodes.length ||
      loop.nodes.findIndex(n => n === target) === (loop.nodes.findIndex(n => n === source) - 1 + loop.nodes.length) % loop.nodes.length;
  };

  return (
    <section className="section bg-gradient-to-b from-white to-commerce-muted/20">
      <div className="container-custom">
        <SectionHeader
          title="Causal Loop Diagram"
          subtitle="Visualizing the interconnected factors in the quick commerce ecosystem"
          centered
        />
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className={`w-full lg:w-3/4 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <svg ref={svgRef} width="600" height="500" viewBox={`0 0 ${600 * scale} ${500 * scale}`} className="mx-auto">
                    {/* Draw links */}
                    {links.map((link, i) => {
                      const source = scaledNodes.find(n => n.id === link.source)!;
                      const target = scaledNodes.find(n => n.id === link.target)!;
                      
                      // Calculate path
                      const dx = target.x - source.x;
                      const dy = target.y - source.y;
                      const dr = Math.sqrt(dx * dx + dy * dy) * 1.5;
                      
                      // Calculate endpoint adjustments for arrowhead
                      const angle = Math.atan2(target.y - source.y, target.x - source.x);
                      const nodeRadius = 30 * scale; // Approximate node radius
                      
                      const endX = target.x - nodeRadius * Math.cos(angle);
                      const endY = target.y - nodeRadius * Math.sin(angle);
                      
                      const isHighlighted = isLinkInSelectedLoop(link.source, link.target);
                      
                      return (
                        <g key={`link-${i}`} className={isHighlighted ? '' : 'opacity-20'}>
                          <path
                            d={`M${source.x},${source.y} A${dr},${dr} 0 0,1 ${endX},${endY}`}
                            fill="none"
                            stroke={link.type === 'reinforcing' ? '#3b82f6' : '#f97316'}
                            strokeWidth={2 * scale}
                            strokeDasharray={link.type === 'balancing' ? `${5 * scale},${5 * scale}` : 'none'}
                          />
                          
                          {/* Arrowhead */}
                          <polygon
                            points={`${endX},${endY} ${endX - 10 * scale * Math.cos(angle - Math.PI/6)},${endY - 10 * scale * Math.sin(angle - Math.PI/6)} ${endX - 10 * scale * Math.cos(angle + Math.PI/6)},${endY - 10 * scale * Math.sin(angle + Math.PI/6)}`}
                            fill={link.type === 'reinforcing' ? '#3b82f6' : '#f97316'}
                          />
                          
                          {/* Link label for "decreases" relationships */}
                          {link.label && (
                            <text
                              x={(source.x + target.x) / 2 + (dx < 0 ? -20 : 20) * scale}
                              y={(source.y + target.y) / 2 + (dy < 0 ? -5 : 15) * scale}
                              fontSize={12 * scale}
                              textAnchor="middle"
                              fill="#64748b"
                            >
                              {link.label}
                            </text>
                          )}
                        </g>
                      );
                    })}
                    
                    {/* Draw nodes */}
                    {scaledNodes.map((node, i) => {
                      const isHighlighted = isNodeInSelectedLoop(node.id);
                      return (
                        <g 
                          key={`node-${i}`} 
                          className={`transition-opacity duration-300 ${isHighlighted ? '' : 'opacity-20'}`}
                        >
                          <circle
                            cx={node.x}
                            cy={node.y}
                            r={30 * scale}
                            fill={`${getCategoryColor(node.category)}20`}
                            stroke={getCategoryColor(node.category)}
                            strokeWidth={2 * scale}
                          />
                          <text
                            x={node.x}
                            y={node.y}
                            textAnchor="middle"
                            alignmentBaseline="middle"
                            fontSize={10 * scale}
                            fontWeight="500"
                            fill="#1e293b"
                          >
                            {node.label.split(' ').map((word, j) => 
                              <tspan 
                                key={j}
                                x={node.x} 
                                dy={j === 0 ? 0 : 12 * scale} 
                              >
                                {word}
                              </tspan>
                            )}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
                <div className="flex flex-wrap gap-3 mt-4 justify-center">
                  {['consumer', 'business', 'environment', 'labor'].map(category => (
                    <div key={category} className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{backgroundColor: getCategoryColor(category)}}
                      />
                      <span className="text-sm capitalize">{category}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className={`w-full lg:w-1/4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            <h4 className="text-lg font-semibold mb-4">Feedback Loops</h4>
            <div className="space-y-3">
              {loops.map(loop => (
                <Card 
                  key={loop.id} 
                  className={`cursor-pointer transition-all ${selectedLoop === loop.id ? 'ring-2 ring-commerce-primary' : 'hover:bg-muted/50'}`}
                  onClick={() => handleLoopClick(loop.id)}
                >
                  <CardContent className="p-4">
                    <h5 className="font-medium text-sm flex items-center gap-2">
                      <span 
                        className={`inline-block w-3 h-3 rounded-full ${loop.type === 'reinforcing' ? 'bg-blue-500' : 'bg-orange-500'}`}
                      />
                      {loop.name}
                      <span className="text-xs font-normal text-muted-foreground ml-auto">
                        {loop.type}
                      </span>
                    </h5>
                    {selectedLoop === loop.id && (
                      <p className="text-xs text-muted-foreground mt-2">{loop.description}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
              <p className="text-xs text-muted-foreground mt-4">
                Click on a loop to highlight its components in the diagram
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
