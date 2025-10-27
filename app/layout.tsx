import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'CRM Conversão - Sistema de Gestão de Leads',
  description: 'Sistema de CRM focado em conversão com pipeline Kanban, integração com Google Calendar, WhatsApp Business API e Instagram DMs.',
  keywords: ['CRM', 'Gestão de Leads', 'Kanban', 'Vendas', 'Conversão', 'WhatsApp', 'Instagram'],
  authors: [{ name: 'CRM Conversão' }],
  creator: 'CRM Conversão',
  publisher: 'CRM Conversão',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    title: 'CRM Conversão',
    description: 'Sistema de CRM focado em conversão real',
    siteName: 'CRM Conversão',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRM Conversão',
    description: 'Sistema de CRM focado em conversão real',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        {/* Prevent flash of unstyled content */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.classList.add(theme);
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {/* Main App */}
        <div id="app" className="min-h-screen">
          {children}
        </div>

        {/* Portal root for modals, tooltips, etc */}
        <div id="portal-root" />

        {/* Toast notifications container */}
        <div id="toast-root" className="fixed top-4 right-4 z-50 flex flex-col gap-2" />
      </body>
    </html>
  );
}
