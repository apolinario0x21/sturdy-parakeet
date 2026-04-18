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
    problem: 'Fluxo acadêmico fragmentado e sem API padronizada para integrações entre sistemas.',
    result: 'Endpoints organizados por domínio com validações e base para escala horizontal.',
    status: 'MVP',
    href: 'https://github.com/marceloapolinario/academic-records',
    tags: ['Golang', 'REST', 'API', 'Backend']
  },
  {
    name: 'cloud-observability-kit',
    description: 'Stack de observabilidade com métricas, logs e alertas para workloads em Kubernetes.',
    problem: 'Baixa visibilidade de incidentes em clusters e resposta lenta a degradações de serviço.',
    result: 'Dashboards e alertas padronizados para reduzir MTTR e melhorar diagnóstico operacional.',
    status: 'WIP',
    href: 'https://github.com/marceloapolinario/cloud-observability-kit',
    tags: ['Kubernetes', 'Prometheus', 'Grafana', 'SRE']
  },
  {
    name: 'iac-network-blueprint',
    description: 'Módulos Terraform para provisionar rede e segurança com padrões reutilizáveis em multi-cloud.',
    problem: 'Provisionamento inconsistente de rede e segurança entre ambientes e provedores cloud.',
    result: 'Blueprint reutilizável com menor drift de configuração e rollout mais previsível.',
    status: 'Produção',
    href: 'https://github.com/marceloapolinario/iac-network-blueprint',
    tags: ['Terraform', 'AWS', 'GCP', 'Networking']
  }
];
