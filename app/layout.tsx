import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono'
});

export const metadata: Metadata = {
  title: 'Marcelo Apolinário | DevOps & Networking Engineer',
  description: 'Marcelo Apolinário - DevOps & Platform Engineer, Kubernetes, Terraform, AWS/GCP, Go.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={jetbrainsMono.variable}>{children}</body>
    </html>
  );
}
