'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { ThemeProvider } from 'next-themes';
import ToasterContext from '../context/ToastContext';
import { ThemeProviderWrapper } from '@keyval-dev/design-system';
import '../globals.css';
import PlausibleProvider from 'next-plausible'
import ConversionInitiator from '@/components/Conversions/landing.simple.tracking';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="eng">
      <head>
        <PlausibleProvider domain="odigos.io" />
      </head>
      <body className={`dark:bg-black`}>
        <ThemeProviderWrapper>
          <ThemeProvider
            enableSystem={false}
            attribute="class"
            defaultTheme="dark"
          >
            <ConversionInitiator />
            <Header />
            <ToasterContext />
            {children}
            <Footer />
            <ScrollToTop />
          </ThemeProvider>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
