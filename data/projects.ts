export type Project = {
  name: string;
  description: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: 'academic-records',
    description: 'API RESTful em Golang para gestão acadêmica com arquitetura limpa e foco em escalabilidade.',
    tags: ['Golang', 'REST', 'API', 'Backend']
  },
  {
    name: 'cloud-observability-kit',
    description: 'Stack de observabilidade com métricas, logs e alertas para workloads em Kubernetes.',
    tags: ['Kubernetes', 'Prometheus', 'Grafana', 'SRE']
  },
  {
    name: 'iac-network-blueprint',
    description: 'Módulos Terraform para provisionar rede e segurança com padrões reutilizáveis em multi-cloud.',
    tags: ['Terraform', 'AWS', 'GCP', 'Networking']
  }
];
