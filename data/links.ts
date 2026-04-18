export type ContactLink = {
  label: string;
  href: string;
  display: string;
};

export const links: ContactLink[] = [
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
