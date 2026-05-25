import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const AwsIcon = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.36 12.3c-.31.39-.78.69-1.42.89-.64.2-1.43.3-2.38.3-.96 0-1.74-.11-2.35-.33-.61-.22-1.07-.51-1.39-.88-.32-.37-.47-.8-.47-1.3 0-.48.13-.88.38-1.2.25-.32.61-.57 1.09-.76.47-.19 1.05-.33 1.74-.43.69-.1 1.47-.18 2.33-.25V9.9c0-.4-.08-.71-.23-.92-.15-.21-.42-.36-.82-.44-.4-.08-.94-.12-1.63-.12-.66 0-1.2.05-1.64.14-.43.09-.76.24-.98.45s-.35.49-.37.84H6.38c.02-.69.21-1.26.57-1.72.36-.46.88-.8 1.56-1.03.68-.23 1.54-.34 2.58-.34 1.13 0 2.01.12 2.65.37.64.25 1.08.61 1.33 1.1.25.49.37 1.12.37 1.91v2.85c0 .64.08 1.16.23 1.54.15.38.41.72.76 1.01h-2.17zm-1.8-2.3v-1.12c-.62.06-1.17.13-1.66.21-.49.08-.88.19-1.18.32-.3.13-.52.29-.66.47-.14.18-.21.41-.21.69 0 .28.09.51.27.69.18.18.45.31.81.39.36.08.81.12 1.35.12.59 0 1.09-.07 1.51-.21.42-.14.73-.34.93-.6.2-.26.3-.57.3-.92z" />
  </svg>
);

export const AzureIcon = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M5.4 19L1.7 13.9 12.8 3.5 19 6.2 5.4 19zm13.2-12.8L12.8 3.5l5.8 1.8 3.7 5.1-13.2 8.6h13.2V6.2z" />
  </svg>
);

export const TerraformIcon = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M1.44 0v7.575h7.2V0h-7.2zm7.776 0v7.575h7.2V0h-7.2zm7.776 7.575V15.15h7.2V7.575h-7.2zM1.44 8.213v7.575h7.2V8.213h-7.2zm7.776 7.575V24h7.2v-8.212h-7.2z" />
  </svg>
);

export const CloudFormationIcon = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

export const EksIcon = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M2 12h20" />
  </svg>
);

export const DockerIcon = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.983 11.078h2.119c.102 0 .186-.083.186-.188V8.95c0-.103-.084-.186-.186-.186h-2.119c-.103 0-.186.083-.186.186v1.94c0 .105.083.188.186.188zM11.266 11.078h2.118c.102 0 .185-.083.185-.188V8.95c0-.103-.083-.186-.185-.186h-2.118c-.101 0-.186.083-.186.186v1.94c0 .105.085.188.186.188zM13.983 8.199h2.119c.102 0 .186-.083.186-.186V6.074c0-.103-.084-.186-.186-.186h-2.119c-.103 0-.186.083-.186.186v1.939c0 .103.083.186.186.186zM11.266 8.199h2.118c.102 0 .185-.083.185-.186V6.074c0-.103-.083-.186-.185-.186h-2.118c-.101 0-.186.083-.186.186v1.939c0 .103.085.186.186.186zM8.577 11.078h2.118c.102 0 .185-.083.185-.188V8.95c0-.103-.083-.186-.185-.186H8.577c-.101 0-.186.083-.186.186v1.94c0 .105.085.188.186.188zM5.881 11.078h2.118c.102 0 .186-.083.186-.188V8.95c0-.103-.084-.186-.186-.186H5.881c-.103 0-.186.083-.186.186v1.94c0 .105.083.188.186.188zM8.577 8.199h2.118c.102 0 .185-.083.185-.186V6.074c0-.103-.083-.186-.185-.186H8.577c-.101 0-.186.083-.186.186v1.939c0 .103.085.186.186.186zM11.266 5.32h2.118c.102 0 .185-.083.185-.186V3.194c0-.103-.083-.186-.185-.186h-2.118c-.101 0-.186.083-.186.186v1.94c0 .103.085.186.186.186zM24 10.975c-.207-.068-.813-.231-1.637-.231-.852 0-1.851.186-2.585.666-.084.053-.168.114-.24.18H1.362c-.084 0-.156.059-.174.137-.024.1-.192.802-.186 1.703.018 2.204.851 4.545 2.471 6.969 1.542 2.308 3.738 3.528 6.528 3.63 1.002.036 2.016.036 3.012 0 2.766-.102 4.956-1.322 6.492-3.63 1.344-2.008 2.208-4.22 2.508-6.195a9.664 9.664 0 0 0 .234-1.841c.006-.114-.078-.231-.225-.231a5.617 5.617 0 0 0-1.044-.137z" />
  </svg>
);

export const PythonIcon = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.966 0c-1.614 0-3.083.14-3.957.382-2.316.643-2.457 2.03-2.457 4.148V7h6.467c1.194 0 2.162.968 2.162 2.162v1.946h2.162c1.785 0 3.325-.972 3.673-3.023.336-1.986.353-3.682-.361-4.706C19.014.887 16.924 0 11.966 0zm-3.085.952c.382 0 .692.31.692.692 0 .382-.31.692-.692.692a.69.69 0 0 1-.692-.692c0-.382.31-.692.692-.692zM6.48 4.673c-1.785 0-3.325.972-3.673 3.023-.336 1.986-.353 3.682.361 4.706C3.882 13.435 5.972 14.3 10.93 14.3c1.614 0 3.083-.14 3.957-.382 2.316-.643 2.457-2.03 2.457-4.148V7.327h-6.467c-1.194 0-2.162-.968-2.162-2.162V3.22H8.642V4.673zM14.93 12.395c.382 0 .692.31.692.692 0 .382-.31.692-.692.692a.69.69 0 0 1-.692-.692c0-.382.31-.692.692-.692z" />
  </svg>
);

export const GoIcon = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M1.81 9.68c-.06-.5-.09-1-.09-1.51 0-3.9 3.03-7.07 6.78-7.07 3.32 0 6.09 2.48 6.66 5.74h-3.15c-.48-1.57-1.89-2.71-3.51-2.71-2.08 0-3.77 1.77-3.77 3.97 0 .5.09.98.27 1.41l-3.19.17zm12.37 3.01c-.81 2.35-3.03 4.06-5.63 4.06-3.23 0-5.88-2.65-5.88-5.88 0-.31.02-.61.07-.91l-3.18.17C.05 10.57 0 10.98 0 11.4c0 4.96 4.02 8.98 8.98 8.98 3.73 0 6.94-2.27 8.3-5.51l-3.1-2.18zm8.28-4.95v8.66h-1.92v-8.66h1.92zm-5.06 0v8.66h-1.92v-8.66h1.92z" />
  </svg>
);

export const ReactIcon = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

export const NextIcon = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.2 13.9l-5.6-7.3v7.3H11v-9.6h1.6l5.2 6.8v-6.8h1.6v9.6h-1.2z" />
  </svg>
);

export const NodeIcon = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.11L3 7.3v10.38l9 5.2 9-5.2V7.3l-9-5.19zm7.5 14.77l-7.5 4.33-7.5-4.33V8.46l7.5-4.33 7.5 4.33v8.42zm-8.25-3.32v3.75h1.5v-3.75l3.25 1.88.75-1.3-3.25-1.88 3.25-1.88-.75-1.3-3.25 1.88v-3.75h-1.5v3.75l-3.25-1.88-.75 1.3 3.25 1.88-3.25 1.88.75 1.3 3.25-1.88z" />
  </svg>
);

export const MongoIcon = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C7.2 4.8 5.6 10.4 5.6 14.4c0 3.5 2.9 6.4 6.4 6.4s6.4-2.9 6.4-6.4c0-4-1.6-9.6-6.4-14.4zm.8 19.1c-.2.1-.5.1-.8.1-.3 0-.5 0-.7-.1v-3.2c.4-.2.8-.5 1.1-.9l.4 4.1zm-.8-5.7v-9.6c2.4 3.2 3.2 7.2 2.4 9.6-.4.4-.8.8-1.2 1-.4-.3-.8-.6-1.2-1z" />
  </svg>
);

export const DjangoIcon = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M9.8 2.1H5.4v19.8h7.5c2.7 0 4.8-.7 6.3-2.1S21.5 16.5 21.5 14c0-2.4-.7-4.4-2.1-5.7s-3.5-2-6.2-2h-3.4V2.1zm0 7.8h3.3c1.7 0 2.9.4 3.7 1.1s1.2 1.8 1.2 3.1c0 1.4-.4 2.5-1.2 3.2s-2.1 1.1-3.8 1.1H9.8V9.9z" />
  </svg>
);

export const ShopifyIcon = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.5 6.3L12 1.5 4.5 6.3 3 17.2c0 .8.6 1.6 1.4 1.8l7.6 3.2 7.6-3.2c.8-.2 1.4-1 1.4-1.8l-1.5-10.9zM12 4.1l4.8 3.1-4.8 2.3-4.8-2.3 4.8-3.1zm-6 12.3l.8-5.8 5.2 2.5v5.8L6 16.4zm12 0l-6.0 2.5v-5.8l5.2-2.5.8 5.8z" />
  </svg>
);

export const BlockchainIcon = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

export const SqlIcon = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

export const KafkaIcon = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm-1-6.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
  </svg>
);

export const CodeBuildIcon = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="12" y1="4" x2="12" y2="20" />
  </svg>
);

export const JenkinsIcon = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.122 7.025a1.868 1.868 0 0 1-.09 2.634l-5.69 5.176a1.868 1.868 0 0 1-2.502.046l-2.484-2.257a1.868 1.868 0 0 1 2.503-2.756l1.203 1.093 4.428-4.027a1.868 1.868 0 0 1 2.634.091z" />
  </svg>
);

export const GitIcon = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.187 0L8.708 2.624l2.76 2.76c.645-.215 1.379-.07 1.889.44.516.515.655 1.258.428 1.89l2.768 2.77c.632-.228 1.375-.09 1.89.423.604.604.604 1.582 0 2.185-.603.606-1.58.606-2.18 0-.517-.515-.655-1.258-.428-1.89l-2.753-2.76a2.022 2.022 0 0 1-1.9 0l-2.062 2.062c.227.632.088 1.375-.428 1.89-.604.604-1.582.604-2.187 0-.604-.603-.604-1.58 0-2.185.516-.515 1.259-.653 1.89-.427l2.062-2.062c-.227-.63-.087-1.373.428-1.89a2.01 2.01 0 0 1 1.48-.58L9.043 3.825 1.067 11.8c-.604.603-.604 1.582 0 2.185l10.48 10.478c.604.604 1.582.604 2.187 0l10.48-10.478c.605-.603.605-1.582 0-2.185z" />
  </svg>
);

export const GrafanaIcon = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

export const PrometheusIcon = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9z" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

export const JiraIcon = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.644 12.633L6.033 7.022 11.644 1.41l5.611 5.611-5.611 5.612zm6.323-6.323l-5.611 5.611 5.611 5.611 5.612-5.611-5.612-5.611zM5.32 12.633L.012 17.94c-.016.016-.016.04 0 .056l5.308 5.308c.016.016.04.016.056 0l5.308-5.308c.016-.016.016-.04 0-.056L5.376 12.633c-.016-.016-.04-.016-.056 0z" />
  </svg>
);

export const ConfluenceIcon = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.43 14.542l-5.65-5.65 5.65-5.65 5.65 5.65-5.65 5.65zm6.545-6.546l-5.65 5.65 5.65 5.65 5.65-5.65-5.65-5.65zM5.885 14.542l-5.308 5.308c-.016.016-.016.04 0 .056l5.308 5.308c.016.016.04.016.056 0l5.308-5.308c.016-.016.016-.04 0-.056l-5.308-5.308a.039.039 0 0 0-.056 0z" />
  </svg>
);

export const FastApiIcon = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" />
  </svg>
);
