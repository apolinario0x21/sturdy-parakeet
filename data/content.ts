export type ProjectItem = {
  name: string;
  description: string;
  tags: string[];
};

export const projects: ProjectItem[] = [
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

export type ArticleItem = {
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  excerpt: string;
  available: boolean;
};

export const articles: ArticleItem[] = [
  {
    slug: '/artigos/ambiente-instalacao-java-linux',
    title: 'Ambiente de Instalação Java no Linux',
    category: 'Java / Ambiente de Desenvolvimento',
    publishedAt: '10 abr 2026',
    readingTime: '12 min',
    excerpt: 'Guia completo para configurar Java 21, Maven, IntelliJ e PostgreSQL no Linux.',
    available: true
  },
  {
    slug: '#',
    title: 'Observabilidade para workloads em Kubernetes',
    category: 'SRE / Observabilidade',
    publishedAt: 'Em revisão',
    readingTime: '8 min',
    excerpt: 'Como estruturar logs, métricas e alertas para ambientes com foco em confiabilidade.',
    available: false
  },
  {
    slug: '#',
    title: 'Padrões de rede para landing zones multi-cloud',
    category: 'Cloud / Networking',
    publishedAt: 'Em revisão',
    readingTime: '10 min',
    excerpt: 'Boas práticas de segmentação, DNS e segurança para bases reusáveis em Terraform.',
    available: false
  }
];

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
    category: 'Containers & Sistemas',
    items: ['Docker', 'Docker Compose', 'Linux (Ubuntu/Kali/Parrot)', 'Windows']
  },
  {
    category: 'Linguagens & Automação',
    items: ['Go', 'TypeScript', 'JavaScript', 'Java', 'Python', 'Bash']
  }
];

export type ContactLink = {
  label: string;
  href: string;
  display: string;
};

export const contactLinks: ContactLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/apolinario',
    display: 'github.com/apolinario'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/marcelo-apolinario/',
    display: 'linkedin.com/in/marcelo-apolinario'
  },
  {
    label: 'Email',
    href: 'mailto:marcelo.apolinario.dev@gmail.com',
    display: 'marcelo.apolinario.dev@gmail.com'
  },
  {
    label: 'Blog / Artigos',
    href: '#artigos',
    display: 'Ver seção de artigos'
  }
];
