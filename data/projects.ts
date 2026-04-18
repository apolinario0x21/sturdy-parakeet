export type ProjectStatus = 'WIP' | 'MVP' | 'Produção';

export type ProjectItem = {
  name: string;
  description: string;
  tags: string[];
  href?: string;
  problem: string;
  result: string;
  status: ProjectStatus;
};

export const projects: ProjectItem[] = [
  {
    name: 'academic-records',
    description: 'API RESTful em Golang para gestão acadêmica com arquitetura limpa e foco em escalabilidade.',
    tags: ['Golang', 'REST', 'API', 'Backend'],
    href: 'https://github.com/marceloapolinario/academic-records',
    problem: 'Sistemas acadêmicos legados dificultavam integração entre matrículas, turmas e histórico escolar.',
    result: 'API modular com endpoints padronizados, redução de retrabalho operacional e base pronta para integrações.',
    status: 'MVP'
  },
  {
    name: 'cloud-observability-kit',
    description: 'Stack de observabilidade com métricas, logs e alertas para workloads em Kubernetes.',
    tags: ['Kubernetes', 'Prometheus', 'Grafana', 'SRE'],
    href: 'https://github.com/marceloapolinario/cloud-observability-kit',
    problem: 'Times sem visibilidade centralizada sobre aplicações em Kubernetes atrasavam diagnóstico de incidentes.',
    result: 'Dashboards e alertas unificados para diminuir MTTR e aumentar previsibilidade operacional.',
    status: 'Produção'
  },
  {
    name: 'iac-network-blueprint',
    description: 'Módulos Terraform para provisionar rede e segurança com padrões reutilizáveis em multi-cloud.',
    tags: ['Terraform', 'AWS', 'GCP', 'Networking'],
    href: 'https://github.com/marceloapolinario/iac-network-blueprint',
    problem: 'Provisionamento de rede inconsistia entre ambientes e gerava drift de configuração.',
    result: 'Blueprint reutilizável com padronização de topologia, segurança e versionamento de infraestrutura.',
    status: 'WIP'
  }
];
