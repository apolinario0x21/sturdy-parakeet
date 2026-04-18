export type ProjectStatus = 'WIP' | 'MVP' | 'Produção';

export type ProjectItem = {
  name: string;
  description: string;
  problem: string;
  result: string;
  status: ProjectStatus;
  href?: string;
  tags: string[];
};

export const projects: ProjectItem[] = [
  {
    name: 'academic-records',
    description: 'API RESTful em Golang para gestão acadêmica com arquitetura limpa e foco em escalabilidade.',
    problem: 'Instituições precisavam de API modular para centralizar matrículas, disciplinas e histórico escolar.',
    result: 'MVP funcional com endpoints versionados, cobertura de testes de serviço e documentação OpenAPI.',
    status: 'MVP',
    href: 'https://github.com/apolinario-dev/academic-records',
    tags: ['Golang', 'REST', 'API', 'Backend']
  },
  {
    name: 'cloud-observability-kit',
    description: 'Stack de observabilidade com métricas, logs e alertas para workloads em Kubernetes.',
    problem: 'Times sem baseline de observabilidade tinham dificuldade para detectar regressões e incidentes cedo.',
    result: 'Kit reutilizável com dashboards e alertas prontos para acelerar onboarding de novos clusters.',
    status: 'Produção',
    href: 'https://github.com/apolinario-dev/cloud-observability-kit',
    tags: ['Kubernetes', 'Prometheus', 'Grafana', 'SRE']
  },
  {
    name: 'iac-network-blueprint',
    description: 'Módulos Terraform para provisionar rede e segurança com padrões reutilizáveis em multi-cloud.',
    problem: 'Provisionamento manual de VPC/VNet e políticas de rede gerava inconsistência entre ambientes.',
    result: 'Blueprint padronizado com variáveis por ambiente e políticas de segurança replicáveis em AWS/GCP.',
    status: 'WIP',
    href: 'https://github.com/apolinario-dev/iac-network-blueprint',
    tags: ['Terraform', 'AWS', 'GCP', 'Networking']
  }
];
