import React, { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    // Particle nodes definition
    const nodeCount = Math.min(Math.floor((width * height) / 12000), 55);
    const nodes = [];
    const colors = ['#4263FF', '#8B5CF6', '#22D3EE', '#60A5FA'];

    // Mouse coordinates
    let mouse = {
      x: null,
      y: null,
      radius: 140
    };

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2.5 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02,
        baseRadius: Math.random() * 2 + 1.5
      });
    }

    // Packet pulses traveling along edges
    const packets = [];
    for (let i = 0; i < 8; i++) {
      packets.push({
        fromIndex: Math.floor(Math.random() * nodeCount),
        toIndex: Math.floor(Math.random() * nodeCount),
        progress: Math.random(),
        speed: 0.008 + Math.random() * 0.012,
        color: '#22D3EE'
      });
    }

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint background radial glow
      const grad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.5,
        10,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.5
      );
      grad.addColorStop(0, 'rgba(66, 99, 255, 0.08)');
      grad.addColorStop(0.5, 'rgba(139, 92, 246, 0.03)');
      grad.addColorStop(1, 'rgba(8, 11, 18, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Update and draw connections
      const maxDistance = 150;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.25;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);

            const strokeGrad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            strokeGrad.addColorStop(0, `rgba(66, 99, 255, ${alpha})`);
            strokeGrad.addColorStop(1, `rgba(139, 92, 246, ${alpha})`);
            ctx.strokeStyle = strokeGrad;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Render traveling data packets
      packets.forEach((packet) => {
        packet.progress += packet.speed;
        if (packet.progress >= 1) {
          packet.progress = 0;
          packet.fromIndex = Math.floor(Math.random() * nodes.length);
          packet.toIndex = Math.floor(Math.random() * nodes.length);
        }

        const from = nodes[packet.fromIndex];
        const to = nodes[packet.toIndex];
        if (from && to) {
          const px = from.x + (to.x - from.x) * packet.progress;
          const py = from.y + (to.y - from.y) * packet.progress;

          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = '#22D3EE';
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#22D3EE';
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        }
      });

      // Update and draw nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce boundaries
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            node.x -= (dx / dist) * force * 2;
            node.y -= (dy / dist) * force * 2;
          }
        }

        node.pulse += node.pulseSpeed;
        const currentRadius = node.baseRadius + Math.sin(node.pulse) * 0.8;

        // Draw node glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `${node.color}22`;
        ctx.fill();

        // Draw node core
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = node.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[420px] lg:min-h-[540px] flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-crosshair rounded-2xl"
      />

      {/* Floating HUD Glass Overlays to reinforce the sophisticated tech interface */}
      <div className="absolute top-6 left-6 z-10 glass-panel px-4 py-2.5 rounded-xl border border-white/10 shadow-lg pointer-events-none transform -rotate-1 hidden sm:block animate-float">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan animate-pulse"></span>
          <span className="text-xs font-mono font-medium text-white">System Architecture: Active</span>
        </div>
        <div className="text-[11px] text-muted font-mono mt-0.5">High-Throughput Microservices</div>
      </div>

      <div className="absolute bottom-8 right-6 z-10 glass-panel px-4 py-3 rounded-xl border border-white/10 shadow-lg pointer-events-none transform rotate-1 hidden sm:block">
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-mono text-muted">Core Engine</span>
          <span className="text-xs font-mono text-cyan bg-cyan/10 px-2 py-0.5 rounded border border-cyan/30">NextGen v3.8</span>
        </div>
        <div className="flex items-center gap-3 mt-2 text-[11px] font-mono text-slate-300">
          <span>Latency: &lt;14ms</span>
          <span>•</span>
          <span className="text-violet-light">AI Pipelines: Ready</span>
        </div>
      </div>

      <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10 glass-panel p-3 rounded-xl border border-white/10 shadow-lg pointer-events-none hidden lg:block">
        <div className="flex flex-col gap-1.5 font-mono text-[10px] text-muted">
          <div className="text-cyan font-bold">NODE_TELEMETRY</div>
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-electric"></span>
            <span>REST / GraphQL APIs</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-violet"></span>
            <span>Cloud Native Deployments</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan"></span>
            <span>Intelligent Automations</span>
          </div>
        </div>
      </div>
    </div>
  );
}
