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

const AlconAppArchitecture = ({ themeColor = "#6366f1" }) => (
  <div className="w-full py-8 px-4 bg-white/5 rounded-2xl border border-white/10 my-6 transition-all duration-500">
    <svg viewBox="0 0 800 200" className="w-full h-auto">
      <defs>
        <marker id="arrowhead-app" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill={themeColor} />
        </marker>
      </defs>
      
      {/* Nodes */}
      <rect x="15" y="75" width="100" height="50" rx="8" fill="#0c0a0f" stroke={themeColor} strokeWidth="1" />
      <text x="65" y="105" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Twilio Stream</text>
      
      <rect x="160" y="45" width="150" height="110" rx="12" fill="#14111c" stroke={themeColor} strokeWidth="2" strokeDasharray="3" />
      <text x="235" y="70" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">FastAPI Core</text>
      <text x="235" y="92" textAnchor="middle" fill="#9fb3c8" fontSize="9">Flow Runtime Engine</text>
      <text x="235" y="112" textAnchor="middle" fill="#9fb3c8" fontSize="9">Hinglish Intent Engine</text>
      <text x="235" y="132" textAnchor="middle" fill="#9fb3c8" fontSize="9">IRDAI Consent Guard</text>
      
      <rect x="360" y="75" width="100" height="50" rx="8" fill="#0c0a0f" stroke={themeColor} strokeWidth="1" />
      <text x="410" y="105" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Redis Lock</text>
      
      <rect x="500" y="45" width="130" height="110" rx="12" fill="#14111c" stroke={themeColor} strokeWidth="2" strokeDasharray="3" />
      <text x="565" y="70" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Celery Workers</text>
      <text x="565" y="92" textAnchor="middle" fill="#9fb3c8" fontSize="9">Campaign Schedule</text>
      <text x="565" y="112" textAnchor="middle" fill="#9fb3c8" fontSize="9">Multi-Channel Retry</text>
      <text x="565" y="132" textAnchor="middle" fill="#9fb3c8" fontSize="9">PostgreSQL Sync</text>
      
      <rect x="670" y="75" width="115" height="50" rx="8" fill="#02140e" stroke="#059669" strokeWidth="1" />
      <text x="727" y="105" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">RDS / PG Store</text>

      {/* Connections */}
      <line x1="115" y1="100" x2="150" y2="100" stroke={themeColor} strokeWidth="2" markerEnd="url(#arrowhead-app)" />
      <line x1="310" y1="100" x2="350" y2="100" stroke={themeColor} strokeWidth="2" markerEnd="url(#arrowhead-app)" />
      <line x1="460" y1="100" x2="490" y2="100" stroke={themeColor} strokeWidth="2" markerEnd="url(#arrowhead-app)" />
      <line x1="630" y1="100" x2="660" y2="100" stroke={themeColor} strokeWidth="2" markerEnd="url(#arrowhead-app)" />
    </svg>
  </div>
);

const EmailIntelligenceArchitecture = ({ themeColor = "#6366f1" }) => (
  <div className="w-full py-8 px-4 bg-white/5 rounded-2xl border border-white/10 my-6 transition-all duration-500">
    <svg viewBox="0 0 800 200" className="w-full h-auto">
      <defs>
        <marker id="arrowhead-email" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill={themeColor} />
        </marker>
      </defs>
      
      {/* Nodes */}
      <rect x="20" y="75" width="120" height="50" rx="8" fill="#040912" stroke={themeColor} strokeWidth="1" />
      <text x="80" y="105" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">React UI (Vercel)</text>
      
      <rect x="200" y="75" width="130" height="50" rx="8" fill="#040912" stroke={themeColor} strokeWidth="1" />
      <text x="265" y="105" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Gin API Router (Render)</text>
      
      <rect x="380" y="45" width="160" height="110" rx="12" fill="#090514" stroke={themeColor} strokeWidth="2" strokeDasharray="3" />
      <text x="460" y="70" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Go Validation Engine</text>
      <text x="460" y="92" textAnchor="middle" fill="#9fb3c8" fontSize="9">DNS Resolving & RFC</text>
      <text x="460" y="112" textAnchor="middle" fill="#9fb3c8" fontSize="9">SMTP TCP Handshake</text>
      <text x="460" y="132" textAnchor="middle" fill="#9fb3c8" fontSize="9">Zero-Day Heuristics</text>
      
      <rect x="600" y="30" width="160" height="50" rx="8" fill="#02140e" stroke="#059669" strokeWidth="1" />
      <text x="680" y="60" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">SQLite DB (emails.db)</text>
      
      <rect x="600" y="120" width="160" height="50" rx="8" fill="#14081c" stroke="#a855f7" strokeWidth="1" />
      <text x="680" y="150" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Discovery Pump worker</text>

      {/* Connections */}
      <line x1="140" y1="100" x2="190" y2="100" stroke={themeColor} strokeWidth="2" markerEnd="url(#arrowhead-email)" />
      <line x1="330" y1="100" x2="370" y2="100" stroke={themeColor} strokeWidth="2" markerEnd="url(#arrowhead-email)" />
      
      <path d="M540 80 h30 v-25 h20" stroke={themeColor} strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-email)" />
      <path d="M540 120 h30 v-25 h20" stroke="#a855f7" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-email)" />
      <path d="M680 120 v-40" stroke="#a855f7" strokeWidth="1.5" fill="none" strokeDasharray="3" markerEnd="url(#arrowhead-email)" />
      
      <text x="460" y="180" textAnchor="middle" fill={themeColor} fontSize="10" fontStyle="italic">Core Validation Service Layer</text>
    </svg>
  </div>
);

const AcceleratorDiagram = ({ themeColor = "#a855f7" }) => (
  <div className="w-full py-8 px-4 bg-[#080510]/60 rounded-2xl border border-white/10 my-6 transition-all duration-500 shadow-2xl relative overflow-hidden group hover:border-purple-500/30">
    <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-xl pointer-events-none"></div>
    <svg viewBox="0 0 800 240" className="w-full h-auto">
      <defs>
        <linearGradient id="purple-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d8b4fe" />
          <stop offset="100%" stopColor={themeColor} />
        </linearGradient>
        <linearGradient id="spot-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#db2777" />
        </linearGradient>
        <filter id="glow-purple" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor={themeColor} floodOpacity="0.25" />
        </filter>
        <marker id="arrowhead-acc" markerWidth="8" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill={themeColor} />
        </marker>
        <marker id="arrowhead-spot" markerWidth="8" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#f472b6" />
        </marker>
      </defs>

      {/* Grid Lines for tech aesthetic */}
      <g stroke="rgba(255,255,255,0.02)" strokeWidth="1">
        <line x1="100" y1="0" x2="100" y2="240" />
        <line x1="200" y1="0" x2="200" y2="240" />
        <line x1="300" y1="0" x2="300" y2="240" />
        <line x1="400" y1="0" x2="400" y2="240" />
        <line x1="500" y1="0" x2="500" y2="240" />
        <line x1="600" y1="0" x2="600" y2="240" />
        <line x1="700" y1="0" x2="700" y2="240" />
        <line x1="0" y1="60" x2="800" y2="60" />
        <line x1="0" y1="120" x2="800" y2="120" />
        <line x1="0" y1="180" x2="800" y2="180" />
      </g>

      {/* Step 1: Git Ingest */}
      <rect x="20" y="80" width="110" height="70" rx="8" fill="#0d081b" stroke="url(#purple-grad)" strokeWidth="1.5" filter="url(#glow-purple)" />
      <path d="M45 105 A 6 6 0 0 1 45 125 A 6 6 0 0 1 45 105 M45 111 V 129 M55 123 A 6 6 0 0 1 55 135 M45 120 H 52 A 6 6 0 0 0 55 123" stroke="#d8b4fe" strokeWidth="1.5" fill="none" />
      <text x="75" y="112" fill="white" fontSize="10" fontWeight="bold">Git Repo</text>
      <text x="75" y="125" fill="#a78bfa" fontSize="8">YAML Webhooks</text>
      <text x="75" y="137" fill="#6b7280" fontSize="7" fontStyle="italic">triggers pipeline</text>

      {/* Step 2: Policy Compliance Check */}
      <rect x="165" y="80" width="110" height="70" rx="8" fill="#0d081b" stroke="#6b7280" strokeWidth="1" strokeDasharray="3" />
      <path d="M185 105 L 195 100 L 205 105 V 117 C 205 123 195 130 195 130 C 195 130 185 123 185 117 Z" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
      <text x="215" y="112" fill="white" fontSize="10" fontWeight="bold">OPA Engine</text>
      <text x="215" y="125" fill="#94a3b8" fontSize="8">Gatekeeper</text>
      <text x="215" y="137" fill="#ef4444" fontSize="7" fontWeight="bold">Deny on Drift</text>

      {/* Step 3: IaC Orchestrator & Helm Packaging */}
      <rect x="310" y="30" width="180" height="175" rx="12" fill="#120c24" stroke="url(#purple-grad)" strokeWidth="1" />
      <text x="400" y="48" textAnchor="middle" fill="#d8b4fe" fontSize="11" fontWeight="extrabold" letterSpacing="0.05em">IAC COMPILER LAYER</text>
      
      {/* Terraform Sub-Box */}
      <rect x="325" y="65" width="150" height="45" rx="6" fill="#0c0717" stroke={themeColor} strokeWidth="1" />
      <path d="M335 77 L342 72 L349 77 L342 82 Z M335 88 L342 83 L349 88 L342 93 Z M342 83 V 72" stroke="#c084fc" strokeWidth="1" fill="none" />
      <text x="358" y="82" fill="white" fontSize="9" fontWeight="bold">Terraform Modules</text>
      <text x="358" y="93" fill="#a78bfa" fontSize="7">Multi-AZ VPC / IAM Roles</text>

      {/* Helm Sub-Box */}
      <rect x="325" y="125" width="150" height="45" rx="6" fill="#0c0717" stroke={themeColor} strokeWidth="1" />
      <circle cx="342" cy="148" r="8" stroke="#a78bfa" strokeWidth="1" fill="none" />
      <path d="M342 140 V 156 M334 148 H 350 M337 143 L 347 153 M337 153 L 347 143" stroke="#a78bfa" strokeWidth="1" />
      <text x="358" y="142" fill="white" fontSize="9" fontWeight="bold">Helm Templates</text>
      <text x="358" y="153" fill="#a78bfa" fontSize="7">Dynamic Manifest Compiles</text>

      {/* Step 4: Production EKS Cluster (VPC isolated) */}
      <rect x="525" y="30" width="250" height="175" rx="12" fill="#080414" stroke="#a855f7" strokeWidth="2" filter="url(#glow-purple)" />
      <text x="650" y="48" textAnchor="middle" fill="white" fontSize="12" fontWeight="black" letterSpacing="0.05em">PROD EKS CLUSTER</text>
      
      {/* Node Group 1 - On Demand */}
      <rect x="540" y="65" width="105" height="50" rx="6" fill="#140b29" stroke="#a855f7" strokeWidth="1" />
      <text x="548" y="80" fill="white" fontSize="9" fontWeight="bold">On-Demand Nodes</text>
      <text x="548" y="92" fill="#c084fc" fontSize="7">M5 instances (Core)</text>
      <text x="548" y="103" fill="#059669" fontSize="7" fontWeight="bold">Active & Stable</text>

      {/* Node Group 2 - Spot Instances */}
      <rect x="655" y="65" width="105" height="50" rx="6" fill="#200d2b" stroke="url(#spot-grad)" strokeWidth="1" />
      <text x="663" y="80" fill="white" fontSize="9" fontWeight="bold">Spot Workers</text>
      <text x="663" y="92" fill="#f472b6" fontSize="7">Up to 75% savings</text>
      <text x="663" y="103" fill="#db2777" fontSize="7" fontWeight="bold">Billing Shielded</text>

      {/* Pod Ingress & ALB router */}
      <rect x="540" y="130" width="220" height="40" rx="6" fill="#0a0518" stroke="#6b7280" strokeWidth="1" />
      <path d="M552 150 H 570 M561 143 L 570 150 L 561 157" stroke="#a78bfa" strokeWidth="1.5" fill="none" />
      <text x="580" y="145" fill="white" fontSize="9" fontWeight="bold">ALB Controller & Route53</text>
      <text x="580" y="156" fill="#94a3b8" fontSize="7">HPA auto-scaler dynamically managing pod replication</text>

      {/* Connecting Flows */}
      <path d="M130 115 H 165" stroke={themeColor} strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-acc)" />
      <path d="M275 115 H 310" stroke={themeColor} strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-acc)" />
      
      {/* Route out of IAC to EKS */}
      <path d="M490 88 H 525" stroke={themeColor} strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-acc)" />
      <path d="M490 148 H 525" stroke={themeColor} strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-acc)" />
      
      {/* Dynamic spot instance fallback arrow */}
      <path d="M600 115 V 122 H 680 V 115" stroke="#f472b6" strokeWidth="1" strokeDasharray="3" fill="none" markerEnd="url(#arrowhead-spot)" />

      <text x="400" y="222" textAnchor="middle" fill="#94a3b8" fontSize="8" fontStyle="italic">Fully automated zero-downtime GitOps deployment orchestrations</text>
    </svg>
  </div>
);

const MonitoringDiagram = ({ themeColor = "#3b82f6" }) => (
  <div className="w-full py-8 px-4 bg-[#050915]/60 rounded-2xl border border-white/10 my-6 transition-all duration-500 shadow-2xl relative overflow-hidden group hover:border-blue-500/30">
    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl pointer-events-none"></div>
    <svg viewBox="0 0 800 240" className="w-full h-auto">
      <defs>
        <linearGradient id="blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor={themeColor} />
        </linearGradient>
        <linearGradient id="green-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="purple-grad-mon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <filter id="glow-blue" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor={themeColor} floodOpacity="0.25" />
        </filter>
        <marker id="arrowhead-mon" markerWidth="8" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill={themeColor} />
        </marker>
        <marker id="arrowhead-purple" markerWidth="8" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#a855f7" />
        </marker>
      </defs>

      {/* Grid Lines */}
      <g stroke="rgba(255,255,255,0.02)" strokeWidth="1">
        <line x1="100" y1="0" x2="100" y2="240" />
        <line x1="200" y1="0" x2="200" y2="240" />
        <line x1="300" y1="0" x2="300" y2="240" />
        <line x1="400" y1="0" x2="400" y2="240" />
        <line x1="500" y1="0" x2="500" y2="240" />
        <line x1="600" y1="0" x2="600" y2="240" />
        <line x1="700" y1="0" x2="700" y2="240" />
        <line x1="0" y1="60" x2="800" y2="60" />
        <line x1="0" y1="120" x2="800" y2="120" />
        <line x1="0" y1="180" x2="800" y2="180" />
      </g>

      {/* Step 1: Target Fleet (EKS/VMs) */}
      <rect x="20" y="30" width="115" height="175" rx="10" fill="#070b1b" stroke="#1e293b" strokeWidth="1" />
      <text x="77" y="48" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="bold">TARGET FLEET</text>
      
      {/* Node Box 1 */}
      <rect x="30" y="62" width="95" height="35" rx="6" fill="#0d1430" stroke="#3b82f6" strokeWidth="1" />
      <circle cx="45" cy="80" r="4" fill="#059669" />
      <text x="56" y="80" fill="white" fontSize="8" fontWeight="bold">k8s-pod-auth</text>
      <text x="56" y="89" fill="#93c5fd" fontSize="6">Go Service</text>

      {/* Node Box 2 */}
      <rect x="30" y="107" width="95" height="35" rx="6" fill="#0d1430" stroke="#3b82f6" strokeWidth="1" />
      <circle cx="45" cy="125" r="4" fill="#059669" />
      <text x="56" y="125" fill="white" fontSize="8" fontWeight="bold">k8s-pod-billing</text>
      <text x="56" y="134" fill="#93c5fd" fontSize="6">Go Service</text>

      {/* Node Box 3 */}
      <rect x="30" y="152" width="95" height="40" rx="6" fill="#0d1430" stroke="#1e293b" strokeWidth="1" />
      <circle cx="45" cy="172" r="4" fill="#d97706" />
      <text x="56" y="171" fill="white" fontSize="8" fontWeight="bold">bare-metal-db</text>
      <text x="56" y="180" fill="#94a3b8" fontSize="6">PostgreSQL</text>

      {/* Step 2: Telemetry Pipelines (Prometheus, Loki, Tempo) */}
      <rect x="165" y="30" width="145" height="175" rx="10" fill="#090f24" stroke="url(#blue-grad)" strokeWidth="1" />
      <text x="237" y="48" textAnchor="middle" fill="#93c5fd" fontSize="9" fontWeight="bold" letterSpacing="0.05em">TELEMETRY SCAPERS</text>
      
      {/* Prometheus Scraper */}
      <rect x="175" y="62" width="125" height="38" rx="6" fill="#070c1e" stroke={themeColor} strokeWidth="1" />
      <path d="M182 85 L 187 75 L 192 82 L 197 70 L 202 85" stroke="#f97316" strokeWidth="1.5" fill="none" />
      <text x="210" y="78" fill="white" fontSize="8" fontWeight="bold">Prometheus Server</text>
      <text x="210" y="87" fill="#f97316" fontSize="7">PromQL metrics scrapers</text>

      {/* Grafana Loki Collector */}
      <rect x="175" y="108" width="125" height="38" rx="6" fill="#070c1e" stroke={themeColor} strokeWidth="1" />
      <path d="M182 127 H 202 M187 122 V 132" stroke="#eab308" strokeWidth="1" />
      <text x="210" y="124" fill="white" fontSize="8" fontWeight="bold">Grafana Loki</text>
      <text x="210" y="133" fill="#eab308" fontSize="7">LogQL index parsers</text>

      {/* Tempo distributed tracer */}
      <rect x="175" y="154" width="125" height="38" rx="6" fill="#070c1e" stroke={themeColor} strokeWidth="1" />
      <circle cx="187" cy="173" r="5" stroke="#c084fc" strokeWidth="1" fill="none" />
      <line x1="192" y1="173" x2="202" y2="173" stroke="#c084fc" strokeWidth="1" />
      <circle cx="202" cy="173" r="3" fill="#c084fc" />
      <text x="210" y="170" fill="white" fontSize="8" fontWeight="bold">Tempo / Jaeger</text>
      <text x="210" y="179" fill="#c084fc" fontSize="7">TraceQL spanning</text>

      {/* Step 3: Go SRE Core Engine */}
      <rect x="340" y="30" width="220" height="175" rx="12" fill="#0a122e" stroke="url(#blue-grad)" strokeWidth="1.5" filter="url(#glow-blue)" />
      <text x="450" y="48" textAnchor="middle" fill="white" fontSize="11" fontWeight="black" letterSpacing="0.05em">GO SRE RELIABILITY CORE</text>
      
      {/* Alert Webhook Ingest */}
      <rect x="352" y="62" width="196" height="38" rx="6" fill="#050a1b" stroke="#3b82f6" strokeWidth="1" />
      <text x="362" y="78" fill="white" fontSize="8" fontWeight="bold">Alert Webhook Ingest Queue</text>
      <text x="362" y="87" fill="#93c5fd" fontSize="7">Bearer verification & rate limit routing</text>

      {/* Log-to-Trace Correlator */}
      <rect x="352" y="108" width="196" height="38" rx="6" fill="#050a1b" stroke="#3b82f6" strokeWidth="1" />
      <text x="362" y="124" fill="white" fontSize="8" fontWeight="bold">LogQL &amp; TraceQL Correlator</text>
      <text x="362" y="133" fill="#93c5fd" fontSize="7">Auto-extracts traces linked to error logs</text>

      {/* TUI Bubble Tea State Processor */}
      <rect x="352" y="154" width="196" height="38" rx="6" fill="#050a1b" stroke="#a855f7" strokeWidth="1" />
      <text x="362" y="170" fill="white" fontSize="8" fontWeight="bold">Bubble Tea TUI State Engine</text>
      <text x="362" y="179" fill="#c084fc" fontSize="7">Refreshes terminal panels in real time</text>

      {/* Step 4: SRE Collaborative Spaces & Incidents DB */}
      {/* SSH Wish Tunnel Gateway */}
      <rect x="590" y="30" width="190" height="75" rx="10" fill="#0f0c24" stroke="url(#purple-grad-mon)" strokeWidth="1.5" />
      <rect x="600" y="42" width="22" height="22" rx="4" fill="#a855f7" />
      {/* Padlock Icon */}
      <circle cx="611" cy="51" r="4" stroke="white" strokeWidth="1.5" fill="none" />
      <rect x="606" y="52" width="10" height="8" rx="1" fill="white" />
      <text x="630" y="48" fill="white" fontSize="9" fontWeight="bold">SSH Wish Server</text>
      <text x="630" y="59" fill="#c084fc" fontSize="7">Secure Tunnel (:9022)</text>
      <text x="630" y="70" fill="#34d399" fontSize="7" fontWeight="bold">Dynamic Session Syncing</text>

      {/* SQLite Incident Registry & Postmortem Generator */}
      <rect x="590" y="120" width="190" height="85" rx="10" fill="#061214" stroke="#059669" strokeWidth="1" />
      <text x="600" y="135" fill="white" fontSize="9" fontWeight="bold">Incident Manager (SQLite)</text>
      <text x="600" y="148" fill="#34d399" fontSize="7">Autolog correlation store</text>
      {/* Postmortem card */}
      <rect x="600" y="160" width="170" height="34" rx="4" fill="#040d0e" stroke="#059669" strokeWidth="1" />
      <text x="608" y="172" fill="#34d399" fontSize="8" fontWeight="bold">Markdown Postmortems</text>
      <text x="608" y="183" fill="#94a3b8" fontSize="7">Technical timelines exported automatically</text>

      {/* Connectors */}
      {/* Node to metrics collector line */}
      <path d="M135 115 H 165" stroke={themeColor} strokeWidth="1.5" strokeDasharray="2" fill="none" />
      
      {/* Collectors to Go Core */}
      <path d="M290 85 Q315 85 340 85" stroke={themeColor} strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-mon)" />
      <path d="M290 170 Q315 170 340 170" stroke={themeColor} strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-mon)" />
      
      {/* Go Core to SSH Tunnel and SQLite */}
      <path d="M560 85 Q575 85 590 68" stroke="#a855f7" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-purple)" />
      <path d="M560 148 Q575 148 590 148" stroke="#34d399" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-mon)" />

      <text x="400" y="222" textAnchor="middle" fill="#94a3b8" fontSize="8" fontStyle="italic">Real-time anomaly discovery, incident correlation, and collaborative terminal syncing</text>
    </svg>
  </div>
);

const TokenAgentDiagram = ({ themeColor = "#f59e0b" }) => (
  <div className="w-full py-8 px-4 bg-[#100b05]/60 rounded-2xl border border-white/10 my-6 transition-all duration-500 shadow-2xl relative overflow-hidden group hover:border-amber-500/30">
    <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl pointer-events-none"></div>
    <svg viewBox="0 0 800 240" className="w-full h-auto">
      <defs>
        <linearGradient id="amber-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="100%" stopColor={themeColor} />
        </linearGradient>
        <linearGradient id="green-grad-tkn" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="red-grad-tkn" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fca5a5" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
        <filter id="glow-amber" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor={themeColor} floodOpacity="0.25" />
        </filter>
        <marker id="arrowhead-tkn" markerWidth="8" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill={themeColor} />
        </marker>
        <marker id="arrowhead-green" markerWidth="8" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#059669" />
        </marker>
      </defs>

      {/* Grid Lines */}
      <g stroke="rgba(255,255,255,0.02)" strokeWidth="1">
        <line x1="100" y1="0" x2="100" y2="240" />
        <line x1="200" y1="0" x2="200" y2="240" />
        <line x1="300" y1="0" x2="300" y2="240" />
        <line x1="400" y1="0" x2="400" y2="240" />
        <line x1="500" y1="0" x2="500" y2="240" />
        <line x1="600" y1="0" x2="600" y2="240" />
        <line x1="700" y1="0" x2="700" y2="240" />
        <line x1="0" y1="60" x2="800" y2="60" />
        <line x1="0" y1="120" x2="800" y2="120" />
        <line x1="0" y1="180" x2="800" y2="180" />
      </g>

      {/* Step 1: Multi-Source Ingestion */}
      <rect x="20" y="30" width="120" height="175" rx="10" fill="#0c0804" stroke="#292015" strokeWidth="1" />
      <text x="80" y="48" textAnchor="middle" fill="#d97706" fontSize="9" fontWeight="bold" letterSpacing="0.05em">INGEST SOURCES</text>
      
      {/* PDF file icon representation */}
      <rect x="35" y="62" width="90" height="35" rx="6" fill="#140f09" stroke="#d97706" strokeWidth="1" />
      <path d="M42 75 V 85 M42 75 H 48 M45 80 H 50" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="56" y="78" fill="white" fontSize="8" fontWeight="bold">PDF Extractor</text>
      <text x="56" y="87" fill="#fcd34d" fontSize="6">ledongthuc/pdf</text>

      {/* Chat logs JSONL representation */}
      <rect x="35" y="107" width="90" height="35" rx="6" fill="#140f09" stroke="#d97706" strokeWidth="1" />
      <text x="45" y="128" fill="#f59e0b" fontSize="12" fontWeight="bold">&#123;..&#125;</text>
      <text x="56" y="123" fill="white" fontSize="8" fontWeight="bold">JSON / JSONL</text>
      <text x="56" y="132" fill="#fcd34d" fontSize="6">Chat conversations</text>

      {/* Plain texts representation */}
      <rect x="35" y="152" width="90" height="40" rx="6" fill="#140f09" stroke="#292015" strokeWidth="1" />
      <path d="M42 168 H 52 M42 176 H 50" stroke="#a1a1aa" strokeWidth="1" />
      <text x="56" y="171" fill="white" fontSize="8" fontWeight="bold">Standard Text</text>
      <text x="56" y="180" fill="#a1a1aa" fontSize="6">RAW developer prompts</text>

      {/* Step 2: Go Worker Channels (Goroutines) */}
      {/* Dynamic parallel channels visual */}
      <line x1="140" y1="90" x2="190" y2="70" stroke={themeColor} strokeWidth="1.5" strokeDasharray="3" markerEnd="url(#arrowhead-tkn)" />
      <line x1="140" y1="120" x2="190" y2="120" stroke={themeColor} strokeWidth="1.5" markerEnd="url(#arrowhead-tkn)" />
      <line x1="140" y1="150" x2="190" y2="170" stroke={themeColor} strokeWidth="1.5" strokeDasharray="3" markerEnd="url(#arrowhead-tkn)" />
      <text x="165" y="110" textAnchor="middle" fill="#d97706" fontSize="7" fontWeight="bold" transform="rotate(-20 165 110)">go routines</text>

      {/* Step 3: Atoma BPE Compiler Core */}
      <rect x="195" y="30" width="225" height="175" rx="12" fill="#160e06" stroke="url(#amber-grad)" strokeWidth="1.5" filter="url(#glow-amber)" />
      <text x="307" y="48" textAnchor="middle" fill="white" fontSize="11" fontWeight="black" letterSpacing="0.05em">ATOMA COMPILER CORE</text>
      
      {/* Tiktoken cl100k Registry */}
      <rect x="207" y="62" width="201" height="38" rx="6" fill="#0b0703" stroke={themeColor} strokeWidth="1" />
      <text x="217" y="78" fill="white" fontSize="8" fontWeight="bold">Tiktoken cl100k Base Encoder</text>
      <text x="217" y="87" fill="#fcd34d" fontSize="7">Strict parity parser for OpenAI cl100k payloads</text>

      {/* Claude & Gemini Estimator ratio */}
      <rect x="207" y="108" width="201" height="38" rx="6" fill="#0b0703" stroke={themeColor} strokeWidth="1" />
      <text x="217" y="124" fill="white" fontSize="8" fontWeight="bold">Claude &amp; Gemini Ratios Estimator</text>
      <text x="217" y="133" fill="#fcd34d" fontSize="7">Statistical model for multi-provider cost weighting</text>

      {/* Reasoning Delta isolator */}
      <rect x="207" y="154" width="201" height="38" rx="6" fill="#0b0703" stroke="#ef4444" strokeWidth="1" />
      <text x="217" y="170" fill="white" fontSize="8" fontWeight="bold">Reasoning Delta Auditor (o1/o3)</text>
      <text x="217" y="179" fill="#fca5a5" fontSize="7">Isolates thinking tokens in billed calculations</text>

      {/* Step 4: Prompt Minifier & Rules */}
      <rect x="445" y="30" width="165" height="175" rx="10" fill="#0a0a07" stroke="#854d0e" strokeWidth="1" />
      <text x="527" y="48" textAnchor="middle" fill="#eab308" fontSize="9" fontWeight="bold" letterSpacing="0.05em">RULES MINIFIER ENGINE</text>
      
      {/* Rules list */}
      <rect x="455" y="62" width="145" height="32" rx="4" fill="#14140f" stroke="#eab308" strokeWidth="1" />
      <text x="462" y="75" fill="white" fontSize="8" fontWeight="bold">Vocabulary Redundancies</text>
      <text x="462" y="84" fill="#a1a1aa" fontSize="6">Strips conversational clichés &amp; wordy fillers</text>

      <rect x="455" y="100" width="145" height="32" rx="4" fill="#14140f" stroke="#eab308" strokeWidth="1" />
      <text x="462" y="113" fill="white" fontSize="8" fontWeight="bold">White-Space Compaction</text>
      <text x="462" y="122" fill="#a1a1aa" fontSize="6">Minifies duplicate carriage returns &amp; tabs</text>

      <rect x="455" y="138" width="145" height="52" rx="4" fill="#14140f" stroke="#059669" strokeWidth="1" />
      <text x="462" y="152" fill="#34d399" fontSize="8" fontWeight="bold">Savings Result</text>
      <text x="462" y="163" fill="white" fontSize="8" fontWeight="bold">Reduces billed tokens by</text>
      <text x="462" y="175" fill="#34d399" fontSize="11" fontWeight="black">UP TO 50% SAVINGS</text>

      {/* Step 5: Multi-Provider Pricing Matrix */}
      <rect x="635" y="30" width="145" height="175" rx="10" fill="#080c05" stroke="url(#green-grad-tkn)" strokeWidth="1.5" />
      <text x="707" y="48" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="bold" letterSpacing="0.05em">PTERM TERMINAL VIEW</text>
      
      {/* terminal mockup lines */}
      <rect x="642" y="60" width="130" height="132" rx="6" fill="#030502" stroke="#1e293b" strokeWidth="1" />
      {/* prompt symbol */}
      <text x="648" y="74" fill="#34d399" fontSize="8" fontWeight="bold">&gt;_ Atoma analyze</text>
      
      {/* mini table representation */}
      <text x="648" y="90" fill="#6b7280" fontSize="6">Provider  | Model      | Cost ($)</text>
      <line x1="648" y1="94" x2="766" y2="94" stroke="#334155" strokeWidth="0.5" />
      <text x="648" y="104" fill="#ef4444" fontSize="6" fontWeight="bold">openai    | gpt-4o     | $0.0121</text>
      <text x="648" y="114" fill="#a855f7" fontSize="6" fontWeight="bold">anthropic | claude-3.5 | $0.0098</text>
      <text x="648" y="124" fill="#3b82f6" fontSize="6" fontWeight="bold">gemini    | gem-1.5-pr | $0.0042</text>
      
      <rect x="648" y="138" width="118" height="46" rx="4" fill="#081005" stroke="#059669" strokeWidth="0.5" />
      <text x="652" y="148" fill="#34d399" fontSize="6" fontWeight="bold">Optimization gains:</text>
      <text x="652" y="158" fill="white" fontSize="6">Minified input: 1,120 tkn</text>
      <text x="652" y="168" fill="white" fontSize="6">Original input: 2,430 tkn</text>
      <text x="652" y="177" fill="#34d399" fontSize="6" fontWeight="bold">Total Cost Saved: 53.9%</text>

      {/* Connectors from compiler to minifier */}
      <path d="M420 115 H 445" stroke={themeColor} strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-tkn)" />
      
      {/* Connectors from minifier to output */}
      <path d="M610 115 H 635" stroke="#059669" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead-green)" />

      <text x="400" y="222" textAnchor="middle" fill="#94a3b8" fontSize="8" fontStyle="italic">Concurrent BPE lexical optimization engines providing comprehensive model-price matrixes</text>
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
  const [alconFlipped, setAlconFlipped] = useState(false);

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
            {/* Visual Flipper Control Bar - Highly Noticeable Toggle */}
            <div className="flex justify-between items-center bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-md">
              <span className="text-xs font-bold text-gray-400 pl-2">🔄 Click tabs to flip card:</span>
              <div className="flex gap-2">
                <button 
                  onClick={() => setAlconFlipped(false)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                    !alconFlipped 
                      ? 'bg-emerald-500 text-white shadow-lg' 
                      : 'bg-white/5 text-gray-400 hover:text-white'
                  }`}
                >
                  🚀 Deploy & Infra
                </button>
                <button 
                  onClick={() => setAlconFlipped(true)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                    alconFlipped 
                      ? 'bg-indigo-500 text-white shadow-lg' 
                      : 'bg-white/5 text-gray-400 hover:text-white'
                  }`}
                >
                  🏗️ App Build & Logic
                </button>
              </div>
            </div>

            {/* 3D Flip Card Container */}
            <div className="perspective-1000 w-full min-h-[640px] relative">
              <div className={`w-full h-full duration-700 transform-style-3d relative transition-transform ${alconFlipped ? 'rotate-y-180' : ''}`}>
                
                {/* --- FRONT FACE: DEPLOYMENT/INFRASTRUCTURE (Shown First) --- */}
                <div className={`w-full absolute backface-hidden left-0 top-0 p-8 rounded-3xl border bg-white/5 backdrop-blur-md space-y-8 transition-all duration-500 border-emerald-500/20 shadow-lg shadow-emerald-500/5 ${alconFlipped ? 'pointer-events-none opacity-0' : 'opacity-100'}`}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">🚀</span>
                      <div>
                        <h4 className="text-2xl font-bold text-white">AI Voice Platform</h4>
                        <p className="text-xs text-emerald-400 font-mono">EKS Cluster Deploy & Orchestration</p>
                      </div>
                    </div>
                    <button onClick={() => setAlconFlipped(true)} className="p-2 bg-emerald-500/10 hover:bg-emerald-500/25 border border-emerald-500/25 rounded-xl text-[10px] font-bold text-emerald-400 flex items-center gap-1.5 transition-all">
                      Flip to App 🔄
                    </button>
                  </div>
                  
                  <VoiceArchitecture themeColor="#10b981" />

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Compute Platform", value: "AWS EKS (Kubernetes)" },
                      { label: "Deployment IaC", value: "Modular Terraform" },
                      { label: "Cluster Ingress", value: "Nginx / Cert-Manager" },
                      { label: "Observability", value: "Prometheus / Loki Stack" }
                    ].map((card, i) => (
                      <div key={i} className="p-4 rounded-xl bg-black/40 border border-white/10">
                        <p className="text-[10px] font-black uppercase mb-1 text-emerald-400">{card.label}</p>
                        <p className="text-white text-xs font-semibold">{card.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* --- BACK FACE: APPLICATION BUILD/LOGIC --- */}
                <div className={`w-full absolute backface-hidden left-0 top-0 p-8 rounded-3xl border bg-white/5 backdrop-blur-md space-y-8 transition-all duration-500 border-indigo-500/20 shadow-lg shadow-indigo-500/5 rotate-y-180 ${!alconFlipped ? 'pointer-events-none opacity-0' : 'opacity-100'}`}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">🏗️</span>
                      <div>
                        <h4 className="text-2xl font-bold text-white">AI Voice Engine</h4>
                        <p className="text-xs text-indigo-400 font-mono">FastAPI Telephony & Asynchronous Logic</p>
                      </div>
                    </div>
                    <button onClick={() => setAlconFlipped(false)} className="p-2 bg-indigo-500/10 hover:bg-indigo-500/25 border border-indigo-500/25 rounded-xl text-[10px] font-bold text-indigo-400 flex items-center gap-1.5 transition-all">
                      Flip to Deploy 🚀
                    </button>
                  </div>
                  
                  <AlconAppArchitecture themeColor="#6366f1" />

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Voice Stream", value: "Twilio Media Streams" },
                      { label: "Session Cache", value: "ElastiCache Redis" },
                      { label: "Concurrency Lock", value: "Redis Distributed SETNX" },
                      { label: "Data Persistence", value: "RDS PostgreSQL" }
                    ].map((card, i) => (
                      <div key={i} className="p-4 rounded-xl bg-black/40 border border-white/10">
                        <p className="text-[10px] font-black uppercase mb-1 text-indigo-400">{card.label}</p>
                        <p className="text-white text-xs font-semibold">{card.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Project 3: Enterprise Email Intelligence Engine (Dual Focus) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-32 border-b border-white/5 pb-20">
          <div className="lg:col-span-7 space-y-6">
            <div className={`p-8 rounded-3xl border bg-white/5 backdrop-blur-md space-y-8 transition-all duration-500 ${isBuild ? 'border-indigo-500/20' : 'border-emerald-500/20'}`}>
              <div className="flex items-center gap-4">
                <span className="text-4xl">🛡️</span>
                <div>
                  <h4 className="text-2xl font-bold text-white">Email Intelligence Platform</h4>
                  <p className="text-xs text-indigo-400 font-mono">Go Systems Core & React Visual client</p>
                </div>
              </div>
              
              <EmailIntelligenceArchitecture themeColor={accentHex} />

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Core Engine", value: "Go / Zero-Dependency / Sockets" },
                  { label: "Database Layer", value: "SQLite / Caching / Telemetry" },
                  { label: "API Service", value: "Gin HTTP / Secure Auth / IP-Rate Limit" },
                  { label: "Frontend App", value: "React / Vite / Vanilla HSL CSS" }
                ].map((card, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className={`text-[10px] font-black uppercase mb-1 ${isBuild ? 'text-indigo-400' : 'text-emerald-400'}`}>{card.label}</p>
                    <p className="text-white text-xs font-medium">{card.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
                isBuild 
                  ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' 
                  : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
              }`}>
                Systems Engineering & Full Stack
              </span>
              <h3 className="text-3xl font-black tracking-tighter text-white">Enterprise Email Intelligence Engine</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                {isBuild ? (
                  "A high-performance email verification and threat engine engineered in Go and React. Operating with zero third-party APIs, it executes syntax, DNS/MX, and SMTP handshakes concurrently, backed by a polished dark-mode client that visualizes execution step-timelines and 6 global lifecycle states."
                ) : (
                  "A zero-dependency network security API server containerized with CGO-compiled SQLite drivers. Features native port-25 timeout resilience, custom IP rate-limiting middleware, randomized SMTP jitter, and an autonomous background pump telemetry worker."
                )}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Engineering Focus</h4>
              <ul className="space-y-3">
                {isBuild ? [
                  "Raw Go SMTP TCP socket connections with custom greylist & soft-fail handlers",
                  "Double-probe junk-email catch-all filtering bypass logic on active mail servers",
                  "Interactive React UI dashboard with custom HSL CSS styling and responsive states",
                  "Automatic identity age comparisons against RDAP registry creation stamps to flag hijack attempts"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-300">
                    <span className="text-indigo-400 font-bold">✓</span>
                    {item}
                  </li>
                )) : [
                  "Layer-optimized multi-stage Docker build with native C SQLite drivers",
                  "Self-learning background Discovery Pump crawler telemetrying disposable domains",
                  "Custom token-bucket IP-based rate limiting & SMTP jitter protection preventing locks",
                  "Robust CORS & OPTIONS middleware deployed globally across Render/Vercel"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-300">
                    <span className="text-emerald-500 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-6 pt-4">
              <a href="https://email-intelligence-engine.vercel.app/" target="_blank" rel="noopener noreferrer" className={`px-5 py-2.5 text-xs font-bold rounded-xl hover:scale-105 active:scale-95 transition-all text-black font-sans ${
                isBuild ? 'bg-indigo-400 hover:bg-indigo-500' : 'bg-emerald-400 hover:bg-emerald-500'
              }`}>
                Live Sandbox &rarr;
              </a>
              <a href="https://github.com/sanjanamahajan2001-sys/email-intelligence-engine" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-white/5 border border-white/10 text-white text-xs font-bold rounded-xl hover:bg-white/10 transition-all">
                GitHub Repository
              </a>
            </div>
          </div>
        </div>

        {/* Project 4: Health-Monitor Observability & SRE Automation Engine (Dual Focus) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-32 border-b border-white/5 pb-20">
          <div className="lg:col-span-7 space-y-6">
            <div className={`p-8 rounded-3xl border bg-white/5 backdrop-blur-md space-y-8 transition-all duration-500 ${!isBuild ? 'border-emerald-500/20 shadow-lg shadow-emerald-500/5' : 'border-white/10'}`}>
              <div className="flex items-center gap-4">
                <span className="text-4xl">🔍</span>
                <div>
                  <h4 className="text-2xl font-bold text-white">Health-Monitor SRE Engine</h4>
                  <p className="text-xs text-blue-400 font-mono">Go Systems Daemon & Bubble Tea TUI</p>
                </div>
              </div>
              
              <MonitoringDiagram themeColor={isBuild ? '#3b82f6' : '#10b981'} />

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "O11y Correlation", value: "PromQL + LogQL + TraceQL dynamic maps" },
                  { label: "Incident Recovery", value: "65% MTTR reduction via autologs" },
                  { label: "Toil Optimization", value: "24h/week SRE toil task automation" },
                  { label: "Collaborative Sync", value: "Instant SSH-Wish tunnel sessions" }
                ].map((card, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className={`text-[10px] font-black uppercase mb-1 ${isBuild ? 'text-blue-400' : 'text-emerald-400'}`}>{card.label}</p>
                    <p className="text-white text-xs font-medium">{card.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
                isBuild 
                  ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' 
                  : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
              }`}>
                Systems Engineering & Observability
              </span>
              <h3 className="text-3xl font-black tracking-tighter text-white">Health-Monitor SRE Engine</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                {isBuild ? (
                  "An autonomous systems reliability platform engineered in Go. Dynamically aggregates multi-source infrastructure state by scraping real-time PromQL time-series, regex pattern-matching Loki system logs, and correlating Tempo trace segments. Translates high-cardinality telemetry into SRE-actionable indicators, rendering a beautiful terminal dashboard via Bubble Tea."
                ) : (
                  "A high-availability systems daemon built on top of native Go channels. Automates EKS service discovery via Kubernetes client-go libraries, hooks securely to PagerDuty/Slack routing tables, and exposes a collaborative multi-user SSH Wish shell running on port :9022 with unique session synchronization tokens."
                )}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Engineering Focus</h4>
              <ul className="space-y-3">
                {isBuild ? [
                  "Embedded SSH tunnel using the Wish framework for multi-user real-time session sync",
                  "Adaptive metrics mapping querying /api/v1/series to dynamically discover cluster services",
                  "Blameless postmortem generator automatically extracting technical evidence & timelines",
                  "Bubble Tea terminal UI loaded with interactive scorecards, system dashboards, and incident browsers"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-300">
                    <span className="text-blue-400 font-bold">✓</span>
                    {item}
                  </li>
                )) : [
                  "AWS environment credential isolation for AWS EKS cluster discovery via secure sudo sessions",
                  "Systemd daemon setup with automatic recovery loops and isolated file system permissions",
                  "Toil analytics reporting engine generating leadership-ready cost & savings reviews",
                  "Prometheus AlertManager webhook listener with bearer token verification & rate limiters"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-300">
                    <span className="text-emerald-500 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-6 pt-4">
              <a href="https://github.com/sanjanamahajan2001-sys/health-monitor-sre-engine" target="_blank" rel="noopener noreferrer" className={`px-5 py-2.5 text-xs font-bold rounded-xl hover:scale-105 active:scale-95 transition-all text-black font-sans ${
                isBuild ? 'bg-blue-400 hover:bg-blue-500' : 'bg-emerald-400 hover:bg-emerald-500'
              }`}>
                Explore Observability Engine &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Project 5: Atoma Token Auditor & Prompt Cost Optimizer (Dual Focus) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-32 border-b border-white/5 pb-20">
          <div className="lg:col-span-7 space-y-6">
            <div className={`p-8 rounded-3xl border bg-white/5 backdrop-blur-md space-y-8 transition-all duration-500 ${!isBuild ? 'border-emerald-500/20 shadow-lg shadow-emerald-500/5' : 'border-white/10'}`}>
              <div className="flex items-center gap-4">
                <span className="text-4xl">🪙</span>
                <div>
                  <h4 className="text-2xl font-bold text-white">Atoma Token Agent</h4>
                  <p className="text-xs text-amber-500 font-mono">BPE Encoders & Concurrent Batch Engine</p>
                </div>
              </div>
              
              <TokenAgentDiagram themeColor={isBuild ? '#f59e0b' : '#10b981'} />

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "BPE Ingest Speed", value: "10k+ tokens/sec multithreaded ledongthuc/pdf" },
                  { label: "Lexical Minification", value: "Up to 50% prompt token reduction" },
                  { label: "Estimator Accuracy", value: "100% tiktoken parity + Claude/Gemini ratios" },
                  { label: "o1/o3 Audit Parity", value: "Realtime reasoning delta isolation" }
                ].map((card, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className={`text-[10px] font-black uppercase mb-1 ${isBuild ? 'text-amber-500' : 'text-emerald-400'}`}>{card.label}</p>
                    <p className="text-white text-xs font-medium">{card.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
                isBuild 
                  ? 'bg-amber-500/10 border-amber-500/20 text-amber-500' 
                  : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
              }`}>
                Lexical Parsers & AI SRE
              </span>
              <h3 className="text-3xl font-black tracking-tighter text-white">Atoma Token Agent</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                {isBuild ? (
                  "A high-precision BPE lexical auditor utility written in Go. Natively loads the cl100k_base vocabulary registry to calculate prompt token lengths with mathematical precision, and implements advanced statistical models to estimate Claude and Gemini pricing. Features a real-time reasoning delta engine that separates billed thinking tokens from chat history payloads."
                ) : (
                  "A concurrent batch-processing CLI orchestrator utilizing thread-safe Go worker pools and pipeline channels. Processes directory targets containing thousands of PDF and JSONL data files, running multiple goroutine workers under isolated system RAM footprints, with runtime configuration hot-reloaded dynamically from YAML pricing databases."
                )}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Engineering Focus</h4>
              <ul className="space-y-3">
                {isBuild ? [
                  "High-fidelity Byte Pair Encoding (BPE) calculations using native Tiktoken cl100k encoders",
                  "Lexical rules engine stripping polite conversational fillers and wordy clichés to reduce spend",
                  "Invisible reasoning delta calculator measuring actual billed tokens against prompt lengths",
                  "Turn-by-turn chat heatmap analytics identifying candidates for token pruning and summaries"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-300">
                    <span className="text-amber-500 font-bold">✓</span>
                    {item}
                  </li>
                )) : [
                  "Multi-threaded folder auditor using dynamic Go channel pipelines to prevent memory leaks",
                  "Low-level enterprise PDF plain text extractor using native ledongthuc/pdf stream readers",
                  "Dynamic YAML-based pricing database hot-reloading configurations at runtime",
                  "Rich colorized Pterm terminal comparative dashboards with tables and side-by-side panels"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-300">
                    <span className="text-emerald-500 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-6 pt-4">
              <a href="https://github.com/sanjanamahajan2001-sys/atoma-token-agent" target="_blank" rel="noopener noreferrer" className={`px-5 py-2.5 text-xs font-bold rounded-xl hover:scale-105 active:scale-95 transition-all text-black font-sans ${
                isBuild ? 'bg-amber-400 hover:bg-amber-500' : 'bg-emerald-400 hover:bg-emerald-500'
              }`}>
                Explore Token Agent &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Project 6: K8s Accelerator (Deep Highlights Card) */}
        <div className="grid grid-cols-1 gap-8 mb-32">
          <div className={`p-8 rounded-3xl border bg-white/5 backdrop-blur-md transition-all duration-500 ${!isBuild ? 'border-emerald-500/20 shadow-lg shadow-emerald-500/5' : 'border-white/10'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">⚡</span>
                  <h4 className="text-2xl font-black text-white">K8s Deployment Accelerator</h4>
                </div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/10 border border-purple-500/20 text-purple-400">Platform Infrastructure &amp; CD</span>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">
                  An enterprise \"Platform-in-a-Box\" orchestration framework designed to accelerate multi-tenant EKS node environments. Couples deterministic modular Terraform base infrastructures with scalable dynamic Helm library charts. Integrates strict Open Policy Agent (OPA) Gatekeeper policies directly into automated GitOps delivery routes to guarantee zero configuration drifts.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {[
                    { label: "Bootstrap Velocity", value: "<8 mins spin-up time" },
                    { label: "OPA Compliance", value: "100% policy enforcement" },
                    { label: "Spot Cost Fallbacks", value: "Up to 75% compute savings" },
                    { label: "Developer Onboard", value: "70% faster cluster access" }
                  ].map((metric, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-purple-400 text-[9px] font-black uppercase mb-1">{metric.label}</p>
                      <p className="text-white text-xs font-semibold">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7 w-full">
                <AcceleratorDiagram themeColor={isBuild ? '#a855f7' : '#10b981'} />
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5 flex justify-between items-center">
              <span className="text-[10px] text-gray-500 font-mono">Helm / Terraform / OPA / Go</span>
              <a href="https://github.com/sanjanamahajan2001-sys/k8s-deployment-accelerator" target="_blank" className="text-xs font-bold text-purple-400 hover:underline">
                Explore Framework &rarr;
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
