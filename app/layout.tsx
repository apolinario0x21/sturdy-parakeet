import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono'
});

export const metadata: Metadata = {
  title: 'Marcelo Apolinário | DevOps Engineer | AWS, Kubernetes, Terraform',
  description:
    'DevOps Engineer com foco em AWS, Kubernetes, Terraform, CI/CD e observabilidade, atuando na automação de infraestrutura e construção de ambientes confiáveis e escaláveis',
  keywords: [
    'devops engineer',
    'platform engineer',
    'sre',
    'aws',
    'kubernetes',
    'terraform',
    'docker',
    'linux',
    'ci/cd',
    'github actions',
    'observability',
    'prometheus',
    'grafana',
    'eks',
    'gitops',
    'cloud infrastructure',
    'automation'
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={jetbrainsMono.variable}>{children}</body>
    </html>
  );
}
