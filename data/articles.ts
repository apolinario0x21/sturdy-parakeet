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
