import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetBrains = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Apolinário | DevOps & Networking Engineer',
  description: 'Página profissional em estilo terminal Linux para DevOps & Networking Engineer.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={jetBrains.className}>{children}</body>
    </html>
  );
}
