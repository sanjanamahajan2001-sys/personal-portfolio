"use client";

import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[0%] right-[0%] w-[30%] h-[30%] bg-purple-600/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Navigation */}
      <nav className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center backdrop-blur-sm sticky top-0 z-50">
        <div className="text-xl font-black tracking-tighter text-white">SANJANA.</div>
        <div className="hidden md:flex gap-10 text-sm font-medium text-gray-400">
          <a href="#projects" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
        </div>
        <a href="mailto:sanjanamaahi2001@gmail.com" className="px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:scale-105 transition-all active:scale-95">
          Work with me
        </a>
      </nav>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-6 pt-32 pb-40">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-8 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
          Available for Cloud/DevOps roles
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-white">
          Architecting <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Infrastructure</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed font-medium">
          Cloud & DevOps Engineer focused on building resilient, automated, and observable systems. I bridge the gap between code and production-grade infrastructure with focus on cost optimization and reliability.
        </p>
      </header>

      {/* Flagship Project - The Case Study */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-32 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-white">Flagship Project</h2>
            <p className="text-gray-400 font-medium">The AI Voice Agent Infrastructure Platform</p>
          </div>
          <a href="https://github.com/sanjanamahajan2001-sys/AI-Voice-Infrastructure-Platform" target="_blank" className="text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors border-b border-indigo-500/50 pb-1">
            View on GitHub &rarr;
          </a>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-10">
            <div className="relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 aspect-video flex items-center justify-center">
              <div className="text-center p-12">
                <div className="text-6xl mb-4">🏗️</div>
                <h4 className="text-xl font-bold mb-2">Cloud-Native Architecture</h4>
                <p className="text-sm text-gray-500 font-mono">EKS | Terraform | VPC | RDS</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all">
                <div className="text-indigo-400 font-black text-2xl mb-2">99.9%</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Uptime Design</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all">
                <div className="text-purple-400 font-black text-2xl mb-2">&lt;100ms</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Target Latency</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white">The Challenge</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Deploying AI voice agents requires low-latency WebSockets and high compute variability. Standard scaling often fails for persistent audio streams.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white">The Solution</h4>
              <ul className="space-y-3">
                {[
                  "Multi-AZ EKS deployment for high availability",
                  "Terraform modularization for instant env replication",
                  "Custom HPA metrics for WebSocket connection density",
                  "Unified observability with Grafana Loki and Prometheus"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-300">
                    <span className="text-indigo-500 font-bold">0{i+1}.</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-6">
              <div className="flex flex-wrap gap-2">
                {["Terraform", "Kubernetes", "AWS EKS", "FastAPI", "GitHub Actions"].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-32 border-t border-white/10">
        <h2 className="text-4xl font-black tracking-tighter mb-16 text-white text-center">Tech Ecosystem</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
                { cat: "Infrastructure", items: ["Terraform", "CloudFormation", "AWS VPC", "IAM"] },
                { cat: "Compute", items: ["Kubernetes", "Docker", "AWS EKS", "EC2"] },
                { cat: "CI/CD", items: ["GitHub Actions", "Bitbucket Pipelines", "Jenkins"] },
                { cat: "Observability", items: ["Prometheus", "Grafana", "Loki", "CloudWatch"] }
          ].map((skill, i) => (
            <div key={i} className="space-y-4">
              <h4 className="text-indigo-400 text-xs font-black uppercase tracking-widest">{skill.cat}</h4>
              <ul className="space-y-2">
                {skill.items.map(item => (
                  <li key={item} className="text-gray-400 font-medium">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-6 py-40 text-center">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">Ready to scale <br/> your infrastructure?</h2>
        <a href="mailto:sanjanamaahi2001@gmail.com" className="inline-block px-10 py-5 bg-white text-black font-black rounded-2xl hover:scale-105 transition-all active:scale-95 text-lg">
          Get in touch
        </a>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-gray-600 text-xs font-bold tracking-widest uppercase">
          &copy; 2026 Sanjana / Cloud & DevOps Engineer
        </p>
      </footer>
    </div>
  );
}
