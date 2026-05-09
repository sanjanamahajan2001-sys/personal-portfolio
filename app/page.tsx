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
          <a href="#focus" className="hover:text-white transition-colors">Focus</a>
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

        {/* Engineering Focus Section */}
        <section id="focus" className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/10">
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
        </section>
      </header>

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
              
              {/* Architecture Cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "AWS EKS", value: "Cluster Management" },
                  { label: "Terraform", value: "Modular IaC" },
                  { label: "FastAPI", value: "WebSocket Engine" },
                  { label: "Redis/RDS", value: "State Persistence" }
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
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "IaC", value: "Modular Terraform" },
                  { label: "Packaging", value: "Universal Helm" },
                  { label: "Security", value: "Trivy & OPA" },
                  { label: "Environment", value: "AWS EKS" }
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
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Metrics", value: "Prometheus" },
                  { label: "Logging", value: "Grafana Loki" },
                  { label: "Alerting", value: "AlertManager" },
                  { label: "Dashboards", value: "Grafana" }
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
                { cat: "Infrastructure", items: ["Terraform", "Modular IaC", "AWS VPC", "IAM"] },
                { cat: "Compute", items: ["Kubernetes (EKS)", "Docker", "Auto-scaling", "Spot Instances"] },
                { cat: "CI/CD", items: ["GitHub Actions", "Helm Charts", "Trivy Scanning", "GitOps Patterns"] },
                { cat: "Observability", items: ["Prometheus", "Grafana", "Loki", "AlertManager"] }
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
