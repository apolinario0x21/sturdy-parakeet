import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Marcelo Apolinário | DevOps & Networking Engineer',
  description: 'Marcelo Apolinário - DevOps & Platform Engineer, Kubernetes, Terraform, AWS/GCP, Go.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
