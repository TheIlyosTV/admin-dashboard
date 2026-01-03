import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/contexts/AuthContext';

const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Modern Admin Dashboard",
  authors: [{ name: "Frontend Axmedjanov" }],
  openGraph: {
    title: "Admin Dashboard",
    description: "Modern Admin Dashboard",
    url: "https://admin-dashboard.vercel.app",
    siteName: "admin-dashboard",
    images: [
      {
        url: "/og-imagee.jpg", 
        width: 1200,
        height: 630,
        alt: "admin-dashboard — modern admin panel",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Admin Dashboard",
    description: "Modern Admin Dashboard",
    images: ["/og-imagee.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}