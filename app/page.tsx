"use client";

import React, { useState, useEffect } from 'react';
import {
  AwsIcon,
  AzureIcon,
  TerraformIcon,
  CloudFormationIcon,
  EksIcon,
  DockerIcon,
  PythonIcon,
  GoIcon,
  ReactIcon,
  NextIcon,
  NodeIcon,
  MongoIcon,
  DjangoIcon,
  ShopifyIcon,
  BlockchainIcon,
  SqlIcon,
  KafkaIcon,
  CodeBuildIcon,
  JenkinsIcon,
  GitIcon,
  GrafanaIcon,
  PrometheusIcon,
  JiraIcon,
  ConfluenceIcon,
  FastApiIcon
} from './components/Icons';

// --- Architecture Diagram Components (SVG) ---

const VoiceArchitecture = ({ themeColor = "#6366f1" }) => (
  <div className="w-full py-8 px-4 bg-white/5 rounded-2xl border border-white/10 my-6 transition-all duration-500">
    <svg viewBox="0 0 800 200" className="w-full h-auto">
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill={themeColor} />
        </marker>
      </defs>
      
      {/* Nodes */}
      <rect x="10" y="75" width="80" height="50" rx="8" fill="#0c0a0f" stroke={themeColor} strokeWidth="1" />
      <text x="50" y="105" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">User</text>
      
      <rect x="150" y="75" width="80" height="50" rx="8" fill="#0c0a0f" stroke={themeColor} strokeWidth="1" />
      <text x="190" y="105" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">AWS ALB</text>
      
      <rect x="290" y="75" width="80" height="50" rx="8" fill="#0c0a0f" stroke={themeColor} strokeWidth="1" />
      <text x="330" y="105" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Ingress</text>
      
      <rect x="430" y="50" width="100" height="100" rx="12" fill="#14111c" stroke={themeColor} strokeWidth="2" strokeDasharray="4" />
      <text x="480" y="105" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">FastAPI Pods</text>
      
      <rect x="590" y="40" width="80" height="40" rx="8" fill="#0c0a0f" stroke={themeColor} strokeWidth="1" />
      <text x="630" y="65" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Redis/RDS</text>
      
      <rect x="590" y="120" width="80" height="40" rx="8" fill="#0c0a0f" stroke={themeColor} strokeWidth="1" />
      <text x="630" y="145" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">LGTM Stack</text>

      {/* Connections */}
      <line x1="90" y1="100" x2="140" y2="100" stroke={themeColor} strokeWidth="2" markerEnd="url(#arrowhead)" />
      <line x1="230" y1="100" x2="280" y2="100" stroke={themeColor} strokeWidth="2" markerEnd="url(#arrowhead)" />
      <line x1="370" y1="100" x2="420" y2="100" stroke={themeColor} strokeWidth="2" markerEnd="url(#arrowhead)" />
      <line x1="530" y1="85" x2="580" y2="65" stroke={themeColor} strokeWidth="1.5" markerEnd="url(#arrowhead)" />
      <line x1="530" y1="115" x2="580" y2="135" stroke={themeColor} strokeWidth="1.5" markerEnd="url(#arrowhead)" />
      
      <text x="480" y="165" textAnchor="middle" fill={themeColor} fontSize="10" fontStyle="italic">EKS Cluster (Multi-AZ)</text>
    </svg>
  </div>
);

const AcceleratorDiagram = ({ themeColor = "#a855f7" }) => (
  <div className="w-full py-8 px-4 bg-white/5 rounded-2xl border border-white/10 my-6 transition-all duration-500">
    <svg viewBox="0 0 800 150" className="w-full h-auto">
      <defs>
        <marker id="arrowhead-acc" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill={themeColor} />
        </marker>
      </defs>
      <rect x="50" y="50" width="120" height="50" rx="10" fill="#14081c" stroke={themeColor} strokeWidth="1" />
      <text x="110" y="80" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Terraform Modules</text>
      
      <rect x="230" y="50" width="120" height="50" rx="10" fill="#14081c" stroke={themeColor} strokeWidth="1" />
      <text x="290" y="80" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Helm Templates</text>
      
      <rect x="410" y="50" width="120" height="50" rx="10" fill="#14081c" stroke={themeColor} strokeWidth="1" />
      <text x="470" y="80" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Security Scan</text>
      
      <rect x="590" y="40" width="140" height="70" rx="15" fill="#200d2b" stroke={themeColor} strokeWidth="2" />
      <text x="660" y="80" textAnchor="middle" fill="white" fontSize="14" fontWeight="black">PROD EKS</text>

      <path d="M170 75 H220" stroke={themeColor} strokeWidth="2" fill="none" markerEnd="url(#arrowhead-acc)" />
      <path d="M350 75 H400" stroke={themeColor} strokeWidth="2" fill="none" markerEnd="url(#arrowhead-acc)" />
      <path d="M530 75 H580" stroke={themeColor} strokeWidth="2" fill="none" markerEnd="url(#arrowhead-acc)" />
    </svg>
  </div>
);

const MonitoringDiagram = ({ themeColor = "#3b82f6" }) => (
  <div className="w-full py-8 px-4 bg-white/5 rounded-2xl border border-white/10 my-6 transition-all duration-500">
    <svg viewBox="0 0 800 180" className="w-full h-auto">
      <defs>
        <marker id="arrowhead-mon" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill={themeColor} />
        </marker>
      </defs>
      <circle cx="100" cy="90" r="40" fill="#071b3d" stroke={themeColor} strokeWidth="2" />
      <text x="100" y="95" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">K8s Cluster</text>
      
      <rect x="220" y="30" width="100" height="40" rx="5" fill="#08070d" stroke={themeColor} strokeWidth="1" />
      <text x="270" y="55" textAnchor="middle" fill="white" fontSize="10">Prometheus</text>
      
      <rect x="220" y="110" width="100" height="40" rx="5" fill="#08070d" stroke={themeColor} strokeWidth="1" />
      <text x="270" y="135" textAnchor="middle" fill="white" fontSize="10">Loki (Logs)</text>
      
      <rect x="400" y="70" width="120" height="40" rx="8" fill="#091b3b" stroke={themeColor} strokeWidth="1" />
      <text x="460" y="95" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Grafana</text>
      
      <rect x="600" y="70" width="100" height="40" rx="8" fill="#3b0a0a" stroke="#ef4444" strokeWidth="1" />
      <text x="650" y="95" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Slack Alerts</text>

      <path d="M140 70 L210 50" stroke={themeColor} strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-mon)" />
      <path d="M140 110 L210 130" stroke={themeColor} strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-mon)" />
      <path d="M320 50 L390 80" stroke={themeColor} strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-mon)" />
      <path d="M320 130 L390 100" stroke={themeColor} strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-mon)" />
      <path d="M520 90 H590" stroke="#ef4444" strokeWidth="2" strokeDasharray="4" fill="none" markerEnd="url(#arrowhead-mon)" />
    </svg>
  </div>
);

const BhaoBhaoArchitecture = ({ themeColor = "#C4A77D" }) => (
  <div className="w-full py-8 px-4 bg-white/5 rounded-2xl border border-white/10 my-6 transition-all duration-500">
    <svg viewBox="0 0 800 240" className="w-full h-auto">
      <defs>
        <marker id="arrowhead-gold" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill={themeColor} />
        </marker>
      </defs>
      
      {/* 4 Frontends (Monorepo Micro-Frontends) */}
      <rect x="20" y="20" width="130" height="35" rx="6" fill="#040912" stroke={themeColor} strokeWidth="1" />
      <text x="85" y="41" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Landing Page (Vercel)</text>
      
      <rect x="20" y="70" width="130" height="35" rx="6" fill="#040912" stroke={themeColor} strokeWidth="1" />
      <text x="85" y="91" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Customer Portal (Vercel)</text>
      
      <rect x="20" y="120" width="130" height="35" rx="6" fill="#040912" stroke={themeColor} strokeWidth="1" />
      <text x="85" y="141" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Groomer Portal (Vercel)</text>

      <rect x="20" y="170" width="130" height="35" rx="6" fill="#040912" stroke={themeColor} strokeWidth="1" />
      <text x="85" y="191" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Admin Portal (Vercel)</text>

      {/* Gateway Hub */}
      <rect x="230" y="95" width="110" height="45" rx="10" fill="#0a0814" stroke="#818cf8" strokeWidth="1.5" />
      <text x="285" y="118" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Recruiter Sandbox</text>
      <text x="285" y="131" textAnchor="middle" fill="#818cf8" fontSize="8" fontStyle="italic">One-Click Router</text>

      {/* Express Node.js API Gateway */}
      <rect x="420" y="77" width="140" height="80" rx="12" fill="#14081c" stroke="#a855f7" strokeWidth="2" />
      <text x="490" y="107" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Node.js Express API</text>
      <text x="490" y="124" textAnchor="middle" fill="#d8b4fe" fontSize="9">Render Web Service</text>
      <text x="490" y="140" textAnchor="middle" fill="#c084fc" fontSize="8" fontStyle="italic">verifyApiKey Middleware</text>

      {/* Database / Third-Party */}
      <rect x="640" y="47" width="130" height="50" rx="8" fill="#02140e" stroke="#059669" strokeWidth="1" />
      <text x="705" y="72" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Neon PostgreSQL</text>
      <text x="705" y="85" textAnchor="middle" fill="#34d399" fontSize="8" fontStyle="italic">Drizzle ORM & Migrations</text>

      <rect x="640" y="132" width="130" height="50" rx="8" fill="#0a0814" stroke="#6366f1" strokeWidth="1" />
      <text x="705" y="157" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Mailgun & Supabase</text>
      <text x="705" y="170" textAnchor="middle" fill="#818cf8" fontSize="8" fontStyle="italic">OTP & Cloud Assets</text>

      {/* Connection arrows */}
      <path d="M150 37 h50 v62 h30" stroke={themeColor} strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-gold)" />
      <path d="M150 87 h80" stroke={themeColor} strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-gold)" />
      <path d="M150 137 h50 v-20 h30" stroke={themeColor} strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-gold)" />
      <path d="M150 187 h60 v-62 h20" stroke={themeColor} strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-gold)" />

      <line x1="340" y1="117" x2="410" y2="117" stroke="#818cf8" strokeWidth="2" strokeDasharray="3" markerEnd="url(#arrowhead-gold)" />

      <path d="M560 102 h30 v-25 h50" stroke="#a855f7" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-gold)" />
      <path d="M560 132 h30 v-5 h50" stroke="#a855f7" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-gold)" />
    </svg>
  </div>
);

// --- Custom Types & Skills Database ---

type Perspective = 'build' | 'deploy';

interface Skill {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  level: string;
  category: 'frontend' | 'backend' | 'devops' | 'observability';
  description: string;
}

const SKILLS: Skill[] = [
  // Frontend
  { name: "React", icon: ReactIcon, level: "Expert", category: "frontend", description: "Interactive SPA architecture, modular hooks, state routing." },
  { name: "Next.js", icon: NextIcon, level: "Expert", category: "frontend", description: "App router, SSR, SSG, server actions, Vercel edge deployment." },
  { name: "TypeScript", icon: GitIcon, level: "Advanced", category: "frontend", description: "Type-safe architectures, modular interfaces, schema validations." },
  { name: "Shopify", icon: ShopifyIcon, level: "Advanced", category: "frontend", description: "Headless commerce integration, custom storefronts, liquid templates." },
  
  // Backend & Databases
  { name: "Python", icon: PythonIcon, level: "Expert", category: "backend", description: "FastAPI engines, clean scripting, data aggregation pipelines." },
  { name: "Django", icon: DjangoIcon, level: "Advanced", category: "backend", description: "Monolith & REST frameworks, admin scaling, ORM structures." },
  { name: "Node.js", icon: NodeIcon, level: "Expert", category: "backend", description: "High-throughput asynchronous APIs, Express gateways." },
  { name: "Go", icon: GoIcon, level: "Intermediate", category: "backend", description: "Concurrency paradigms, custom K8s Operators, backend microservices." },
  { name: "PostgreSQL", icon: SqlIcon, level: "Advanced", category: "backend", description: "Serverless Neon clusters, transactional normalization, index tuning." },
  { name: "MongoDB", icon: MongoIcon, level: "Advanced", category: "backend", description: "NoSQL indexing, aggregation pipelines, dynamic schemas." },
  { name: "Apache Kafka", icon: KafkaIcon, level: "Intermediate", category: "backend", description: "Distributed real-time message brokers, pub-sub streams." },
  { name: "Blockchain", icon: BlockchainIcon, level: "Intermediate", category: "backend", description: "Decentralized state logic, smart contract integration, Web3 bridges." },
  
  // DevOps & Cloud
  { name: "AWS", icon: AwsIcon, level: "Expert", category: "devops", description: "VPC, IAM, EKS, RDS, Spot Instances, Route53 cost optimization." },
  { name: "Azure", icon: AzureIcon, level: "Advanced", category: "devops", description: "Enterprise resource groups, AKS, ARM templates, Azure DevOps pipelines." },
  { name: "Terraform", icon: TerraformIcon, level: "Expert", category: "devops", description: "Modular Infrastructure-as-Code, multi-region state locking." },
  { name: "CloudFormation", icon: CloudFormationIcon, level: "Advanced", category: "devops", description: "Deterministic AWS resource templates, drift detection." },
  { name: "Kubernetes / EKS", icon: EksIcon, level: "Expert", category: "devops", description: "Orchestration, HPA, Helm packaging, library charts, multi-AZ clusters." },
  { name: "Docker", icon: DockerIcon, level: "Expert", category: "devops", description: "Layer-optimized multi-stage builds, runtime isolation, swarm config." },
  
  // CI/CD & Observability / Collaboration
  { name: "GitHub Actions", icon: GitIcon, level: "Expert", category: "observability", description: "Highly parallel build workflows, automated lint/scan integration." },
  { name: "Jenkins", icon: JenkinsIcon, level: "Advanced", category: "observability", description: "Declarative Groovy pipelines, local node scaling, active automation." },
  { name: "CircleCI", icon: CircleCIIcon, level: "Advanced", category: "observability", description: "Rapid image caching, artifact sharing, modular runner jobs." },
  { name: "Bitbucket Pipelines", icon: BitbucketIcon, level: "Advanced", category: "observability", description: "Integrated branch deployment targets, GitOps delivery triggers." },
  { name: "AWS CodeBuild", icon: CodeBuildIcon, level: "Advanced", category: "observability", description: "Managed build environments, secure IAM integration." },
  { name: "Grafana", icon: GrafanaIcon, level: "Expert", category: "observability", description: "Unified metric dashboards, Loki log linking, AlertManager routing." },
  { name: "Prometheus", icon: PrometheusIcon, level: "Expert", category: "observability", description: "High-resolution metric scraping, custom SLO and alert rule definitions." },
  { name: "Jira", icon: JiraIcon, level: "Advanced", category: "observability", description: "Enterprise project tracking, sprint metrics, lifecycle automation." },
  { name: "Confluence", icon: ConfluenceIcon, level: "Advanced", category: "observability", description: "Centralized architecture wikis, runbooks, documentation hub." }
];

// Helper fallback components for standard imports that are in SKILLS but not explicitly declared
function CircleCIIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10" />
    </svg>
  );
}

function BitbucketIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22.25 2H1.75c-.41 0-.75.34-.75.75v18.5c0 .41.34.75.75.75h20.5c.41 0 .75-.34.75-.75V2.75c0-.41-.34-.75-.75-.75zM12 17.5c-3.04 0-5.5-2.46-5.5-5.5s2.46-5.5 5.5-5.5 5.5 2.46 5.5 5.5-2.46 5.5-5.5 5.5z" />
    </svg>
  );
}


export default function Home() {
  const [perspective, setPerspective] = useState<Perspective>('build');
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll for nav header blur effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme variable configurations based on perspective state
  const isBuild = perspective === 'build';
  const accentColor = isBuild ? 'indigo-500' : 'emerald-500';
  const accentHex = isBuild ? '#6366f1' : '#10b981';
  const textGradClass = isBuild 
    ? 'from-indigo-400 via-purple-400 to-fuchsia-400' 
    : 'from-emerald-400 via-teal-400 to-cyan-400';

  return (
    <div className="min-h-screen bg-[#030205] text-white font-sans selection:bg-indigo-500/30 overflow-x-hidden transition-colors duration-500">
      
      {/* Dynamic Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className={`absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[140px] transition-all duration-700 ${isBuild ? 'bg-indigo-600/10' : 'bg-emerald-600/10'}`}></div>
        <div className={`absolute bottom-[0%] right-[0%] w-[40%] h-[40%] rounded-full blur-[120px] transition-all duration-700 ${isBuild ? 'bg-purple-600/10' : 'bg-cyan-600/10'}`}></div>
      </div>

      {/* Navigation Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#030205]/80 backdrop-blur-md py-4 border-b border-white/5' : 'py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-black tracking-tighter text-white">SANJANA.</div>
          
          <div className="hidden md:flex gap-10 text-sm font-medium text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          </div>

          <div className="flex items-center gap-4">
            {/* Nav Switch Button */}
            <button 
              onClick={() => setPerspective(isBuild ? 'deploy' : 'build')}
              className={`hidden sm:inline-flex px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 border ${
                isBuild 
                  ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/20' 
                  : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20'
              }`}
            >
              Switch to {isBuild ? 'DevOps' : 'Full Stack'}
            </button>

            <a 
              href="mailto:sanjanamaahi2001@gmail.com" 
              className={`px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-md ${
                isBuild ? 'hover:shadow-indigo-500/10' : 'hover:shadow-emerald-500/10'
              }`}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-6 pt-36 pb-20 relative">
        
        {/* Dynamic Dual-Perspective Toggle Switch (Hero Focus Element) */}
        <div className="flex justify-center mb-10">
          <div className="p-1 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex items-center shadow-2xl relative z-10">
            <button 
              onClick={() => setPerspective('build')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all duration-500 ${
                isBuild 
                  ? 'bg-indigo-500 text-white shadow-lg accent-glow-build' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              🏗️ Build Mode <span className="text-xs font-medium opacity-80">(Full Stack)</span>
            </button>
            <button 
              onClick={() => setPerspective('deploy')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all duration-500 ${
                !isBuild 
                  ? 'bg-emerald-500 text-white shadow-lg accent-glow-deploy' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              🚀 Deploy Mode <span className="text-xs font-medium opacity-80">(DevOps)</span>
            </button>
          </div>
        </div>

        {/* Dynamic Badge */}
        <div className="flex justify-center">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold mb-8 uppercase tracking-widest transition-all duration-500 ${
            isBuild 
              ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' 
              : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
          }`}>
            <span className={`w-2 h-2 rounded-full animate-pulse ${isBuild ? 'bg-indigo-500' : 'bg-emerald-500'}`}></span>
            {isBuild ? 'Application Architecture' : 'Platform & Infrastructure Engineering'}
          </div>
        </div>

        {/* Adaptive Heading */}
        <div className="text-center">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.95] text-white">
            {isBuild ? (
              <>
                Double-Engine <br/> 
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${textGradClass} transition-all duration-500`}>Full Stack</span> Developer
              </>
            ) : (
              <>
                High-Availability <br/>
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${textGradClass} transition-all duration-500`}>DevOps Platform</span> Engineer
              </>
            )}
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed font-medium mx-auto mb-12 transition-all duration-500">
            {isBuild ? (
              "Designing elegant frontend interfaces, modeling highly normalized relational databases, and crafting secure asynchronous API gateways. I build apps that are clean, performant, and ready to scale."
            ) : (
              "Orchestrating production-grade Kubernetes environments, writing modular Infrastructure as Code (IaC), building zero-downtime CI/CD workflows, and implementing enterprise observability stacks."
            )}
          </p>

          <div className="flex justify-center gap-4">
            <a 
              href="#projects" 
              className={`px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-300 border ${
                isBuild 
                  ? 'bg-indigo-500 border-indigo-600 text-white hover:bg-indigo-600 shadow-lg hover:shadow-indigo-500/20' 
                  : 'bg-emerald-500 border-emerald-600 text-white hover:bg-emerald-600 shadow-lg hover:shadow-emerald-500/20'
              }`}
            >
              Explore My Work
            </a>
            <a 
              href="#skills" 
              className="px-8 py-4 rounded-2xl font-bold text-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              View Tech Ecosystem
            </a>
          </div>
        </div>

        {/* Display The Premium Asset Banner */}
        <div className="mt-20 max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group bg-black/40">
          <div className={`absolute inset-0 bg-gradient-to-t from-[#030205] via-transparent to-transparent opacity-60 z-10`}></div>
          <img 
            src={isBuild ? "/assets/build.png" : "/assets/deploy.png"} 
            alt={isBuild ? "Full Stack Build banner" : "DevOps Deploy banner"}
            className="w-full h-auto object-cover opacity-90 transition-all duration-700 scale-100 group-hover:scale-[1.02]"
          />
        </div>

      </header>

      {/* About Me Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8">
            <h3 className={`text-xs font-black uppercase tracking-widest mb-4 transition-all duration-500 ${isBuild ? 'text-indigo-400' : 'text-emerald-400'}`}>
              The Philosophy
            </h3>
            <p className="text-2xl md:text-4xl font-medium text-white leading-snug">
              {isBuild ? (
                <>
                  I write <span className="text-indigo-400">clean, highly performant code</span> designed from the ground up to be containerized, tested, and automated. I believe application design directly dictates its operation.
                </>
              ) : (
                <>
                  I believe that <span className="text-emerald-400">infrastructure is a product</span>. I build automated, deterministic platforms that enable engineers to deploy code securely, reliably, and instantly.
                </>
              )}
            </p>
          </div>
          <div className="md:col-span-4 grid grid-cols-1 gap-4">
            <div className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
              <p className="text-gray-500 text-[10px] font-black uppercase mb-1">Dual Specialty</p>
              <p className="text-white font-bold text-lg">Build & Deploy Catalyst</p>
            </div>
            <div className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
              <p className="text-gray-500 text-[10px] font-black uppercase mb-1">Primary Mandate</p>
              <p className="text-white font-bold text-lg">Reliability & Performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Core Values */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              title: "Asynchronous APIs", 
              desc: "Building low-latency Python/Node.js engines, managing Kafka pipelines, and implementing secure token-based isolation.",
              pFocus: 'build'
            },
            { 
              title: "Deterministic IaC", 
              desc: "Deploying multi-AZ AWS/Azure environments using Terraform, CloudFormation, and standardized Helm library charts.",
              pFocus: 'deploy'
            },
            { 
              title: "Observability & SLAs", 
              desc: "Structuring real-time Prometheus scrapers, Grafana dashboards, Loki log aggregations, and automated incident routing.",
              pFocus: 'deploy'
            }
          ].map((item, i) => {
            const isHighlighted = (isBuild && item.pFocus === 'build') || (!isBuild && item.pFocus === 'deploy');
            return (
              <div 
                key={i} 
                className={`p-6 rounded-2xl bg-white/5 border backdrop-blur-md transition-all duration-500 ${
                  isHighlighted 
                    ? `border-${accentColor}/30 bg-${accentColor}/5 shadow-lg` 
                    : 'border-white/5'
                }`}
              >
                <h4 className={`font-bold mb-2 uppercase tracking-tighter text-sm transition-all duration-500 ${
                  isHighlighted 
                    ? (isBuild ? 'text-indigo-400' : 'text-emerald-400') 
                    : 'text-gray-400'
                }`}>
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Flagship Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-28 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-white">Engineering Flagships</h2>
            <p className="text-gray-400 font-medium italic">Production systems, scaled pipelines, and architectural diagrams.</p>
          </div>
        </div>

        {/* Project 1: BhaoBhao (Flagship Full-Stack Monorepo) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-32 border-b border-white/5 pb-20">
          <div className="lg:col-span-7 space-y-6">
            <div className={`p-8 rounded-3xl border bg-white/5 backdrop-blur-md space-y-8 transition-all duration-500 ${isBuild ? 'border-indigo-500/20' : 'border-white/10'}`}>
              <div className="flex items-center gap-4">
                <span className="text-4xl">🐕</span>
                <div>
                  <h4 className="text-2xl font-black tracking-tight text-white">Bhao Bhao</h4>
                  <p className="text-xs text-amber-400 font-mono font-bold tracking-widest uppercase">Multi-Portal Monorepo Service</p>
                </div>
              </div>
              
              {/* Architecture Diagram */}
              <div className="space-y-4">
                <p className="text-[10px] font-black text-amber-400 uppercase tracking-widest text-center">Monorepo System Architecture</p>
                <BhaoBhaoArchitecture themeColor={isBuild ? "#6366f1" : "#C4A77D"} />
              </div>

              {/* Grid cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Architecture", value: "4 Micro-Frontends (Vercel)" },
                  { label: "Server Logic", value: "Node.js API (Render)" },
                  { label: "Data Persistence", value: "Neon Serverless PostgreSQL" },
                  { label: "Migrator Engine", value: "Drizzle Schema Migrations" }
                ].map((card, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-amber-400 text-[10px] font-black uppercase mb-1">{card.label}</p>
                    <p className="text-white text-xs font-medium">{card.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
                Full-Stack Flagship
              </span>
              <h3 className="text-3xl font-black tracking-tighter text-white">Micro-Frontend Service Ecosystem</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                Standardized a complex 5-portal micro-frontend system inside a single, high-performance GitHub monorepo. Built for instant recruiting sandbox validation, this active system aggregates client appointments, real-time OTP logins, comprehensive pet service flows, and multi-tenant admin dashboards.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Focus Highlights</h4>
              <ul className="space-y-3">
                {[
                  "Strict CORS isolation & token-based session handling across MFEs",
                  "Modular Express API with auto-healing multiple key verifications",
                  "Serverless SQL schemas with strict automated Drizzle migrations",
                  "Integrations with Supabase cloud assets & Mailgun SMTP triggers"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-300">
                    <span className="text-amber-500 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-6 pt-4">
              <a href="https://bhao-bhao.vercel.app" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-amber-500 text-black text-xs font-bold rounded-xl hover:scale-105 active:scale-95 transition-all">
                Live Sandbox &rarr;
              </a>
              <a href="https://github.com/sanjanamahajan2001-sys/BhaoBhao" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-white/5 border border-white/10 text-white text-xs font-bold rounded-xl hover:bg-white/10 transition-all">
                GitHub Repository
              </a>
            </div>
          </div>
        </div>

        {/* Project 2: AI Voice Infrastructure Platform (Dual Focus) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-32 border-b border-white/5 pb-20">
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
                isBuild 
                  ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' 
                  : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
              }`}>
                Platform & High Concurrency
              </span>
              <h3 className="text-3xl font-black tracking-tighter text-white">AI Voice Infrastructure Platform</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                {isBuild ? (
                  "A high-concurrency websocket processing backend structured to deploy AI chat & audio agents. Programmed using FastAPI and Python scripting, focusing on real-time stream scaling, low-latency audio packet delivery, and stateless broker distribution."
                ) : (
                  "A cloud-native AWS EKS container platform provisioned deterministically with Terraform. Features custom Prometheus scrapers measuring P99 voice latency, automated GitHub Actions, multi-AZ VPC design, and cost-efficient Spot instance groups."
                )}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Engineering Focus</h4>
              <ul className="space-y-3">
                {isBuild ? [
                  "High-concurrency WebSocket state management and session persistence",
                  "Low-latency chunked audio packet routing & async brokers",
                  "FastAPI microservice endpoints with centralized verification",
                  "Failover validation routines ensuring zero dropped connections"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-300">
                    <span className="text-indigo-400 font-bold">✓</span>
                    {item}
                  </li>
                )) : [
                  "Modular multi-AZ VPC, RDS databases, and EKS clusters in Terraform",
                  "Spot instance node groups using Infracost for visual budget monitoring",
                  "Grafana observability dashboards integrating Prometheus metric alerts",
                  "Secure AWS Secrets Manager integrations with IAM Roles for Service Accounts"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-300">
                    <span className="text-emerald-500 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <a href="https://github.com/sanjanamahajan2001-sys/AI-Voice-Infrastructure-Platform" target="_blank" className={`px-5 py-2.5 text-xs font-bold rounded-xl hover:scale-105 active:scale-95 transition-all text-white border ${
                isBuild ? 'bg-indigo-500/10 border-indigo-500/30' : 'bg-emerald-500/10 border-emerald-500/30'
              }`}>
                Explore Architecture &rarr;
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className={`p-8 rounded-3xl border bg-white/5 backdrop-blur-md space-y-8 transition-all duration-500 ${!isBuild ? 'border-emerald-500/20' : 'border-white/10'}`}>
              <div className="flex items-center gap-4">
                <span className="text-4xl">🎙️</span>
                <div>
                  <h4 className="text-2xl font-bold text-white">AI Voice Engine</h4>
                  <p className="text-xs text-gray-400 font-mono">EKS Pod Scaling & Audio persistence</p>
                </div>
              </div>
              
              <VoiceArchitecture themeColor={accentHex} />

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Compute", value: "AWS EKS (Kubernetes)" },
                  { label: "Deployment IaC", value: "Modular Terraform" },
                  { label: "Realtime API", value: "FastAPI / WebSocket" },
                  { label: "Observability", value: "Prometheus / Loki Stack" }
                ].map((card, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className={`text-[10px] font-black uppercase mb-1 ${isBuild ? 'text-indigo-400' : 'text-emerald-400'}`}>{card.label}</p>
                    <p className="text-white text-xs font-medium">{card.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 & 4 (EKS Accelerator & Production Observability - DevOps Highlights) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* K8s Accelerator */}
          <div className={`p-8 rounded-3xl border bg-white/5 backdrop-blur-md flex flex-col justify-between transition-all duration-500 ${!isBuild ? 'border-emerald-500/20 shadow-lg shadow-emerald-500/5' : 'border-white/10'}`}>
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">⚡</span>
                  <h4 className="text-xl font-black text-white">K8s Accelerator</h4>
                </div>
                <span className="text-xs text-purple-400 font-mono font-bold uppercase tracking-wider">Platform Engine</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                A "Platform-in-a-Box" framework designed to reduce onboarding time by 70%. Abstraction layers using versioned Terraform, Helm library charts, and secure GitOps deployment triggers.
              </p>
              <AcceleratorDiagram themeColor={isBuild ? '#a855f7' : '#10b981'} />
            </div>
            <div className="pt-6 border-t border-white/5 flex justify-between items-center">
              <span className="text-[10px] text-gray-500 font-mono">Helm / Terraform / OPA / Go</span>
              <a href="https://github.com/sanjanamahajan2001-sys/k8s-deployment-accelerator" target="_blank" className="text-xs font-bold text-purple-400 hover:underline">
                Explore Framework &rarr;
              </a>
            </div>
          </div>

          {/* Observability Incidents */}
          <div className={`p-8 rounded-3xl border bg-white/5 backdrop-blur-md flex flex-col justify-between transition-all duration-500 ${!isBuild ? 'border-emerald-500/20 shadow-lg shadow-emerald-500/5' : 'border-white/10'}`}>
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🔍</span>
                  <h4 className="text-xl font-black text-white">Observability Stack</h4>
                </div>
                <span className="text-xs text-blue-400 font-mono font-bold uppercase tracking-wider">Operations</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Centralized monitoring platform using the LGTM stack (Loki, Grafana, Tempest, Prometheus). Structures SLA alerts, log correlation, and automated Slack incident dispatching.
              </p>
              <MonitoringDiagram themeColor={isBuild ? '#3b82f6' : '#10b981'} />
            </div>
            <div className="pt-6 border-t border-white/5 flex justify-between items-center">
              <span className="text-[10px] text-gray-500 font-mono">Prometheus / Loki / Alerts</span>
              <a href="https://github.com/sanjanamahajan2001-sys/production-monitoring-platform" target="_blank" className="text-xs font-bold text-blue-400 hover:underline">
                Explore Observability &rarr;
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* Tech Ecosystem Section */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-28 border-t border-white/10">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-white">Interactive Tech Ecosystem</h2>
          <p className="text-gray-400 font-medium max-w-2xl mx-auto">
            My complete stack, categorized. Technologies that align with the active **{perspective === 'build' ? 'Build (Full Stack)' : 'Deploy (DevOps)'}** perspective are highlighted with active glows.
          </p>
        </div>

        {/* 4 Category Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Category: Frontend */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-white/10">
              <span className="text-lg">💻</span>
              <h4 className={`text-xs font-black uppercase tracking-widest ${isBuild ? 'text-indigo-400' : 'text-gray-500'}`}>Frontend Core</h4>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {SKILLS.filter(s => s.category === 'frontend').map(skill => {
                const isHighlight = isBuild;
                return (
                  <div 
                    key={skill.name}
                    className={`p-4 rounded-xl border backdrop-blur-md glass-card flex flex-col justify-between ${
                      isHighlight 
                        ? 'border-indigo-500/30 bg-indigo-500/[0.02] shadow-md shadow-indigo-500/[0.02]' 
                        : 'border-white/5 opacity-60'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon size={18} className={isHighlight ? 'text-indigo-400' : 'text-gray-400'} />
                        <span className="font-bold text-sm text-white">{skill.name}</span>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                        isHighlight ? 'bg-indigo-500/10 text-indigo-400' : 'bg-white/5 text-gray-500'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">{skill.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Category: Backend & Databases */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-white/10">
              <span className="text-lg">⚙️</span>
              <h4 className={`text-xs font-black uppercase tracking-widest ${isBuild ? 'text-indigo-400' : 'text-gray-500'}`}>Backend & DB</h4>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {SKILLS.filter(s => s.category === 'backend').map(skill => {
                const isHighlight = isBuild;
                return (
                  <div 
                    key={skill.name}
                    className={`p-4 rounded-xl border backdrop-blur-md glass-card flex flex-col justify-between ${
                      isHighlight 
                        ? 'border-indigo-500/30 bg-indigo-500/[0.02] shadow-md shadow-indigo-500/[0.02]' 
                        : 'border-white/5 opacity-60'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon size={18} className={isHighlight ? 'text-indigo-400' : 'text-gray-400'} />
                        <span className="font-bold text-sm text-white">{skill.name}</span>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                        isHighlight ? 'bg-indigo-500/10 text-indigo-400' : 'bg-white/5 text-gray-500'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">{skill.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Category: DevOps & Cloud */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-white/10">
              <span className="text-lg">☁️</span>
              <h4 className={`text-xs font-black uppercase tracking-widest ${!isBuild ? 'text-emerald-400' : 'text-gray-500'}`}>Cloud & IaC</h4>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {SKILLS.filter(s => s.category === 'devops').map(skill => {
                const isHighlight = !isBuild;
                return (
                  <div 
                    key={skill.name}
                    className={`p-4 rounded-xl border backdrop-blur-md glass-card flex flex-col justify-between ${
                      isHighlight 
                        ? 'border-emerald-500/30 bg-emerald-500/[0.02] shadow-md shadow-emerald-500/[0.02]' 
                        : 'border-white/5 opacity-60'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon size={18} className={isHighlight ? 'text-emerald-400' : 'text-gray-400'} />
                        <span className="font-bold text-sm text-white">{skill.name}</span>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                        isHighlight ? 'bg-emerald-500/10 text-emerald-400' : 'bg-white/5 text-gray-500'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">{skill.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Category: CI/CD & Observability */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-white/10">
              <span className="text-lg">🔄</span>
              <h4 className={`text-xs font-black uppercase tracking-widest ${!isBuild ? 'text-emerald-400' : 'text-gray-500'}`}>CI/CD & Ops</h4>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {SKILLS.filter(s => s.category === 'observability').map(skill => {
                const isHighlight = !isBuild;
                return (
                  <div 
                    key={skill.name}
                    className={`p-4 rounded-xl border backdrop-blur-md glass-card flex flex-col justify-between ${
                      isHighlight 
                        ? 'border-emerald-500/30 bg-emerald-500/[0.02] shadow-md shadow-emerald-500/[0.02]' 
                        : 'border-white/5 opacity-60'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon size={18} className={isHighlight ? 'text-emerald-400' : 'text-gray-400'} />
                        <span className="font-bold text-sm text-white">{skill.name}</span>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                        isHighlight ? 'bg-emerald-500/10 text-emerald-400' : 'bg-white/5 text-gray-500'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">{skill.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="max-w-4xl mx-auto px-6 py-36 text-center border-t border-white/10">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
          Let's build and <br/> 
          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${textGradClass} transition-all duration-500`}>deploy together.</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-12 font-medium">
          I am always excited to join forces on complex applications, scalable systems, or high-performance cloud architectures. Let's connect!
        </p>
        <a 
          href="mailto:sanjanamaahi2001@gmail.com" 
          className={`inline-block px-10 py-5 bg-white text-black font-black rounded-2xl hover:scale-105 active:scale-95 transition-all text-lg shadow-lg ${
            isBuild ? 'hover:shadow-indigo-500/10' : 'hover:shadow-emerald-500/10'
          }`}
        >
          Get in Touch
        </a>
      </section>

      {/* Footer Section */}
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-gray-600 text-xs font-bold tracking-widest uppercase">
          &copy; 2026 Sanjana / Cloud & DevOps Engineer | <a href="https://www.linkedin.com/in/sanjana-mahajan-467982233/" className="hover:text-white transition-colors">LinkedIn</a>
        </p>
      </footer>

    </div>
  );
}
