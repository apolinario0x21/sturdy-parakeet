import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetBrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });

export const metadata: Metadata = {
  title: 'Marcelo Apolinário | DevOps & Networking Engineer',
  description: 'Marcelo Apolinário - DevOps & Platform Engineer, Kubernetes, Terraform, AWS/GCP, Go.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={jetBrains.variable}>
      <body>{children}</body>
    </html>
  );
}
