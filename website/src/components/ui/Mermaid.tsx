import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
  chart: string;
  className?: string;
}

const Mermaid: React.FC<MermaidProps> = ({ chart, className = '' }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current && chart) {
      // Clear previous content
      chartRef.current.innerHTML = '';
      
      // Initialize mermaid with dark theme
      mermaid.initialize({
        startOnLoad: false,
        theme: 'dark',
        themeVariables: {
          primaryColor: '#1a1a1a',
          primaryTextColor: '#ffffff',
          primaryBorderColor: '#00d4aa',
          lineColor: '#4ecdc4',
          secondaryColor: '#24292e',
          tertiaryColor: '#ff6b6b',
          background: '#1a1a1a',
          mainBkg: '#1a1a1a',
          secondBkg: '#24292e',
          tertiaryBkg: '#ff6b6b'
        }
      });

      // Render the chart
      mermaid.render('mermaid-' + Math.random().toString(36).substr(2, 9), chart)
        .then(({ svg }) => {
          if (chartRef.current) {
            chartRef.current.innerHTML = svg;
          }
        })
        .catch((error) => {
          console.error('Mermaid rendering error:', error);
          if (chartRef.current) {
            chartRef.current.innerHTML = '<div class="text-red-400">Error rendering diagram</div>';
          }
        });
    }
  }, [chart]);

  return <div ref={chartRef} className={className} />;
};

export default Mermaid;
