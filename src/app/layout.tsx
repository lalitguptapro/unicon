import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Head from 'next/head';

// Load your local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the layout (applies globally)
export const metadata: Metadata = {
  title: "Digital Unicon | Leading Digital Marketing Agency",
  description: "Transform your business with Digital Unicon's expert digital marketing solutions. Drive growth, enhance brand visibility, and engage your audience effectively.",
};

// Define the props type
interface RootLayoutProps {
  children: React.ReactNode;
}

// RootLayout component
const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <title>{typeof metadata.title === 'string' ? metadata.title : ''}</title>
        <meta name="description" content={typeof metadata.description === 'string' ? metadata.description : ''} />
        <meta name="google-site-verification" content="MugTmYFPPG22wGWnDjAARRtVPPtzjQEfvBIx8XYUMuo" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
