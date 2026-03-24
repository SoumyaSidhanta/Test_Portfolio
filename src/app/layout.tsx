import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'SSM Test Labs – Custom Software Testing Tools',
  description:
    'AI-powered QA tools & custom software testing solutions for your workflow. Request custom tools, explore our portfolio, and streamline your testing process.',
  keywords: ['software testing', 'QA tools', 'custom tools', 'bug report', 'AI testing', 'SSM Test Labs'],
  authors: [{ name: 'SSM Test Labs' }],
  openGraph: {
    title: 'SSM Test Labs – Custom Software Testing Tools',
    description: 'AI-powered QA tools & custom solutions for your workflow',
    url: 'https://ssmtechlabs.com',
    siteName: 'SSM Test Labs',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased bg-theme-bg text-theme-fg selection:bg-neon/30 selection:text-white font-sans">
        <Navbar />
        <main className="flex-1 overflow-x-hidden relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
