export type ProjectStatus = 'WIP' | 'MVP' | 'Produção';

export type ProjectItem = {
  name: string;
  description: string;
  problem: string;
  result: string;
  status: ProjectStatus;
  tags: string[];
  href?: string;
};

export const projects: ProjectItem[] = [
  {
    name: 'academic-records',
    description: 'API RESTful em Golang para gestão acadêmica com arquitetura limpa e foco em escalabilidade.',
    problem: 'Sistemas acadêmicos fragmentados dificultavam consulta e atualização de dados de alunos e docentes.',
    result: 'Centralização de endpoints com contratos consistentes para matrícula, histórico e disciplina.',
    status: 'MVP',
    tags: ['Golang', 'REST', 'API', 'Backend'],
    href: 'https://github.com/marceloapolinario/academic-records'
  },
  {
    name: 'cloud-observability-kit',
    description: 'Stack de observabilidade com métricas, logs e alertas para workloads em Kubernetes.',
    problem: 'Times tinham baixa visibilidade de falhas e gargalos em clusters distribuídos.',
    result: 'Baseline com dashboards e alertas para reduzir tempo de detecção e triagem de incidentes.',
    status: 'WIP',
    tags: ['Kubernetes', 'Prometheus', 'Grafana', 'SRE'],
    href: 'https://github.com/marceloapolinario/cloud-observability-kit'
  },
  {
    name: 'iac-network-blueprint',
    description: 'Módulos Terraform para provisionar rede e segurança com padrões reutilizáveis em multi-cloud.',
    problem: 'Provisionamento manual de VPC/VNet gerava drift e inconsistência entre ambientes.',
    result: 'Templates reusáveis para segmentação de rede e políticas de segurança em AWS e GCP.',
    status: 'Produção',
    tags: ['Terraform', 'AWS', 'GCP', 'Networking'],
    href: 'https://github.com/marceloapolinario/iac-network-blueprint'
  }
];
