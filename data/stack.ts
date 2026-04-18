export type StackGroup = {
  category: string;
  items: string[];
};

export const stackGroups: StackGroup[] = [
  {
    category: 'Cloud & Plataforma',
    items: ['AWS', 'GCP', 'Kubernetes', 'Helm', 'CloudFront', 'Route 53']
  },
  {
    category: 'Infraestrutura como Código',
    items: ['Terraform', 'Terraform Cloud', 'Packer', 'GitHub Actions']
  },
  {
    category: 'Networking',
    items: ['MikroTik', 'Huawei', 'BGP', 'OSPF', 'VLAN', 'Firewall']
  },
  {
    category: 'Containers & Sistemas',
    items: ['Docker', 'Docker Compose', 'Linux (Ubuntu/Kali/Parrot)', 'Windows']
  },
  {
    category: 'Linguagens & Automação',
    items: ['Go', 'TypeScript', 'JavaScript', 'Java', 'Python', 'Bash']
  }
];
