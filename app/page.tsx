"use client";

import React from 'react';

// --- Architecture Diagram Components (SVG) ---

const VoiceArchitecture = () => (
  <div className="w-full py-8 px-4 bg-white/5 rounded-2xl border border-white/10 my-6">
    <svg viewBox="0 0 800 200" className="w-full h-auto">
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#6366f1" />
        </marker>
      </defs>
      
      {/* Nodes */}
      <rect x="10" y="75" width="80" height="50" rx="8" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1" />
      <text x="50" y="105" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">User</text>
      
      <rect x="150" y="75" width="80" height="50" rx="8" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1" />
      <text x="190" y="105" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">AWS ALB</text>
      
      <rect x="290" y="75" width="80" height="50" rx="8" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1" />
      <text x="330" y="105" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Ingress</text>
      
      <rect x="430" y="50" width="100" height="100" rx="12" fill="#312e81" stroke="#818cf8" strokeWidth="2" strokeDasharray="4" />
      <text x="480" y="105" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">FastAPI Pods</text>
      
      <rect x="590" y="40" width="80" height="40" rx="8" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1" />
      <text x="630" y="65" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Redis/RDS</text>
      
      <rect x="590" y="120" width="80" height="40" rx="8" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1" />
      <text x="630" y="145" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">LGTM Stack</text>

      {/* Connections */}
      <line x1="90" y1="100" x2="140" y2="100" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowhead)" />
      <line x1="230" y1="100" x2="280" y2="100" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowhead)" />
      <line x1="370" y1="100" x2="420" y2="100" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowhead)" />
      <line x1="530" y1="85" x2="580" y2="65" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
      <line x1="530" y1="115" x2="580" y2="135" stroke="#6366f1" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
      
      <text x="480" y="165" textAnchor="middle" fill="#6366f1" fontSize="10" fontStyle="italic">EKS Cluster (Multi-AZ)</text>
    </svg>
  </div>
);

const AcceleratorDiagram = () => (
  <div className="w-full py-8 px-4 bg-white/5 rounded-2xl border border-white/10 my-6">
    <svg viewBox="0 0 800 150" className="w-full h-auto">
      <rect x="50" y="50" width="120" height="50" rx="10" fill="#3b0764" stroke="#a855f7" strokeWidth="1" />
      <text x="110" y="80" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Terraform Modules</text>
      
      <rect x="230" y="50" width="120" height="50" rx="10" fill="#3b0764" stroke="#a855f7" strokeWidth="1" />
      <text x="290" y="80" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Helm Templates</text>
      
      <rect x="410" y="50" width="120" height="50" rx="10" fill="#3b0764" stroke="#a855f7" strokeWidth="1" />
      <text x="470" y="80" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Security Scan</text>
      
      <rect x="590" y="40" width="140" height="70" rx="15" fill="#581c87" stroke="#d8b4fe" strokeWidth="2" />
      <text x="660" y="80" textAnchor="middle" fill="white" fontSize="14" fontWeight="black">PROD EKS</text>

      <path d="M170 75 H220" stroke="#a855f7" strokeWidth="2" fill="none" />
      <path d="M350 75 H400" stroke="#a855f7" strokeWidth="2" fill="none" />
      <path d="M530 75 H580" stroke="#a855f7" strokeWidth="2" fill="none" />
    </svg>
  </div>
);

const MonitoringDiagram = () => (
  <div className="w-full py-8 px-4 bg-white/5 rounded-2xl border border-white/10 my-6">
    <svg viewBox="0 0 800 180" className="w-full h-auto">
      <circle cx="100" cy="90" r="40" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2" />
      <text x="100" y="95" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">K8s Cluster</text>
      
      <rect x="220" y="30" width="100" height="40" rx="5" fill="#1e1b4b" stroke="#3b82f6" strokeWidth="1" />
      <text x="270" y="55" textAnchor="middle" fill="white" fontSize="10">Prometheus</text>
      
      <rect x="220" y="110" width="100" height="40" rx="5" fill="#1e1b4b" stroke="#3b82f6" strokeWidth="1" />
      <text x="270" y="135" textAnchor="middle" fill="white" fontSize="10">Loki (Logs)</text>
      
      <rect x="400" y="70" width="120" height="40" rx="8" fill="#1e40af" stroke="#60a5fa" strokeWidth="1" />
      <text x="460" y="95" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Grafana</text>
      
      <rect x="600" y="70" width="100" height="40" rx="8" fill="#991b1b" stroke="#ef4444" strokeWidth="1" />
      <text x="650" y="95" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Slack Alerts</text>

      <path d="M140 70 L210 50" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
      <path d="M140 110 L210 130" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
      <path d="M320 50 L390 80" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
      <path d="M320 130 L390 100" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
      <path d="M520 90 H590" stroke="#ef4444" strokeWidth="2" strokeDasharray="4" fill="none" />
    </svg>
  </div>
);

// --- Main Page ---

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
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
        </div>
        <a href="mailto:sanjanamaahi2001@gmail.com" className="px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:scale-105 transition-all active:scale-95">
          Work with me
        </a>
      </nav>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-8 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
          Engineering Portfolio
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-white">
          Cloud & DevOps <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Infrastructure</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed font-medium mb-12">
          Building resilient, scalable, and observable cloud systems. I specialize in Kubernetes orchestration, infrastructure automation, and production-ready deployment workflows.
        </p>
      </header>

      {/* About Me Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8">
            <h3 className="text-indigo-400 text-xs font-black uppercase tracking-widest mb-4">The Engineer</h3>
            <p className="text-2xl md:text-3xl font-medium text-white leading-snug">
              I’m a DevOps Engineer focused on <span className="text-indigo-400">cloud-native infrastructure</span>, deployment automation, and observability systems. I enjoy building scalable Kubernetes workflows, reusable Terraform infrastructure, and production-oriented CI/CD platforms.
            </p>
          </div>
          <div className="md:col-span-4 grid grid-cols-1 gap-4">
            <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <p className="text-gray-500 text-[10px] font-bold uppercase mb-1">Experience</p>
                <p className="text-white font-bold">Cloud & DevOps</p>
            </div>
            <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <p className="text-gray-500 text-[10px] font-bold uppercase mb-1">Focus</p>
                <p className="text-white font-bold">Scalability & Automation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Focus Summary */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Scalability", desc: "Designing multi-AZ infrastructure using Terraform and EKS for high-availability applications." },
            { title: "Automation", desc: "Building modular CI/CD pipelines that automate infrastructure provisioning and app delivery." },
            { title: "Observability", desc: "Implementing full-stack monitoring with Prometheus, Grafana, and Loki for real-time insights." }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-indigo-400 font-bold mb-2 uppercase tracking-tighter text-sm">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Flagship Project 1 - AI Voice */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-32 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-white">Featured Project</h2>
            <p className="text-gray-400 font-medium italic">AI Voice Infrastructure Platform</p>
          </div>
          <a href="https://github.com/sanjanamahajan2001-sys/AI-Voice-Infrastructure-Platform" target="_blank" className="text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors border-b border-indigo-500/50 pb-1">
            Explore Architecture &rarr;
          </a>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-32">
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 space-y-8">
              <div className="flex items-center gap-4">
                <span className="text-4xl">🎙️</span>
                <h4 className="text-2xl font-bold">Cloud-Native Voice Engine</h4>
              </div>
              
              {/* Architecture Diagram */}
              <div className="space-y-4">
                <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest text-center">System Architecture</p>
                <VoiceArchitecture />
              </div>

              {/* Architecture Cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "AWS EKS", value: "Cluster Management" },
                  { label: "Terraform", value: "Modular IaC" },
                  { label: "Security", value: "IAM & Secrets" },
                  { label: "FinOps", value: "Spot Optimization" }
                ].map((card, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-indigo-400 text-[10px] font-black uppercase mb-1">{card.label}</p>
                    <p className="text-white text-xs font-medium">{card.value}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <h5 className="text-sm font-bold text-gray-300">Deployment Workflow</h5>
                <div className="flex gap-2 items-center text-[10px] font-mono text-gray-500">
                  <span>Push</span> <span className="text-indigo-500">→</span> 
                  <span>GitHub Actions</span> <span className="text-indigo-500">→</span> 
                  <span>Docker Build</span> <span className="text-indigo-500">→</span> 
                  <span>EKS Rollout</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white uppercase tracking-tighter">Project Goal</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Build a production-ready infrastructure for high-concurrency audio processing. This project focuses on solving WebSocket persistence and low-latency scaling in Kubernetes.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white uppercase tracking-tighter">Engineering Focus</h4>
              <ul className="space-y-3">
                {[
                  "Multi-AZ networking for audio stream reliability",
                  "HPA scaling based on custom stream-density metrics",
                  "Cost optimization using AWS Spot Instances",
                  "Integrated P99 latency tracking via Prometheus"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-300">
                    <span className="text-indigo-500 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Project 2 - K8s Accelerator */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-white">Deployment Engine</h2>
            <p className="text-gray-400 font-medium italic">Kubernetes Deployment Accelerator</p>
          </div>
          <a href="https://github.com/sanjanamahajan2001-sys/k8s-deployment-accelerator" target="_blank" className="text-sm font-bold text-purple-400 hover:text-purple-300 transition-colors border-b border-purple-500/50 pb-1">
            View Framework &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-32">
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white uppercase tracking-tighter">The Innovation</h4>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                Standardized the bridge between IaC and application delivery. This framework reduces service onboarding time by abstracting K8s complexity into reusable modules.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white uppercase tracking-tighter">Framework Highlights</h4>
              <ul className="space-y-3">
                {[
                  "Versioned Terraform infrastructure modules",
                  "Universal Helm Charts for rapid onboarding",
                  "Security-first CI/CD with Trivy & OPA",
                  "GitOps-ready delivery pipelines"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-300">
                    <span className="text-purple-500 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 space-y-8">
              <div className="flex items-center gap-4">
                <span className="text-4xl">⚡</span>
                <h4 className="text-2xl font-bold">Reusable K8s Framework</h4>
              </div>

              {/* Architecture Diagram */}
              <div className="space-y-2">
                <p className="text-[10px] font-black text-purple-400 uppercase tracking-widest text-center">Module Workflow</p>
                <AcceleratorDiagram />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Azure / AWS", value: "Multi-cloud IaC" },
                  { label: "Packaging", value: "Universal Helm" },
                  { label: "Security", value: "Trivy & OPA" },
                  { label: "Language", value: "Go Operators" }
                ].map((card, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-purple-400 text-[10px] font-black uppercase mb-1">{card.label}</p>
                    <p className="text-white text-xs font-medium">{card.value}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <h5 className="text-sm font-bold text-gray-300">Accelerator Pipeline</h5>
                <div className="flex gap-2 items-center text-[10px] font-mono text-gray-500">
                  <span>Config</span> <span className="text-purple-500">→</span> 
                  <span>Lint & Scan</span> <span className="text-purple-500">→</span> 
                  <span>Validation</span> <span className="text-purple-500">→</span> 
                  <span>EKS Deploy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 - Monitoring Platform */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-white">Observability Stack</h2>
            <p className="text-gray-400 font-medium italic">Cloud-Native Monitoring Platform</p>
          </div>
          <a href="https://github.com/sanjanamahajan2001-sys/production-monitoring-platform" target="_blank" className="text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors border-b border-blue-500/50 pb-1">
            View Observability Logic &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 space-y-8">
              <div className="flex items-center gap-4">
                <span className="text-4xl">🔍</span>
                <h4 className="text-2xl font-bold">Reliability & Incident Engine</h4>
              </div>

              {/* Architecture Diagram */}
              <div className="space-y-2">
                <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest text-center">Observability Pipeline</p>
                <MonitoringDiagram />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Enterprise", value: "Dynatrace / OTel" },
                  { label: "Logging", value: "Grafana Loki" },
                  { label: "Alerting", value: "AlertManager" },
                  { label: "FinOps", value: "Cost Dashboards" }
                ].map((card, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-blue-400 text-[10px] font-black uppercase mb-1">{card.label}</p>
                    <p className="text-white text-xs font-medium">{card.value}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <h5 className="text-sm font-bold text-gray-300">Incident Flow</h5>
                <div className="flex gap-2 items-center text-[10px] font-mono text-gray-500">
                  <span>Threshold</span> <span className="text-blue-500">→</span> 
                  <span>Rule Eval</span> <span className="text-blue-500">→</span> 
                  <span>Deduplication</span> <span className="text-blue-500">→</span> 
                  <span>Slack Alert</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white uppercase tracking-tighter">The Mission</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Centralized observability for multi-service environments. This project focuses on log correlation and proactive incident response using the LGTM stack.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white uppercase tracking-tighter">Core Capabilities</h4>
              <ul className="space-y-3">
                {[
                  "Log aggregation and correlation with Loki",
                  "Automated incident notifications to Slack",
                  "Uptime tracking and SLO monitoring",
                  "Custom Grafana dashboards for health visualization"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-300">
                    <span className="text-blue-500 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-32 border-t border-white/10">
        <h2 className="text-4xl font-black tracking-tighter mb-16 text-white text-center">Tech Ecosystem</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
                { cat: "Cloud & Infra", items: ["AWS (EKS/RDS)", "Azure (AKS)", "Terraform", "Multi-cloud Networking"] },
                { cat: "Compute & Language", items: ["Kubernetes", "Docker", "Go (Operators)", "Python (FastAPI)"] },
                { cat: "Observability", items: ["Prometheus", "Grafana", "Dynatrace", "Loki Stack"] },
                { cat: "Security & FinOps", items: ["Trivy / OPA", "IAM & Secrets", "Cost Optimization", "Infracost / FinOps"] }
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
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">Scale your <br/> infrastructure.</h2>
        <a href="mailto:sanjanamaahi2001@gmail.com" className="inline-block px-10 py-5 bg-white text-black font-black rounded-2xl hover:scale-105 transition-all active:scale-95 text-lg">
          Get in touch
        </a>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-gray-600 text-xs font-bold tracking-widest uppercase">
          &copy; 2026 Sanjana / Cloud & DevOps Engineer | <a href="https://www.linkedin.com/in/sanjana-mahajan-467982233/" className="hover:text-white transition-colors">LinkedIn</a>
        </p>
      </footer>
    </div>
  );
}
