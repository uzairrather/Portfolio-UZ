import Head from 'next/head';
import Nav from './Nav';          // ✅ Import Main Navbar
import MobileNav from './MobileNav';  // ✅ Import Mobile Navigation
import Footer from './Footer';    // ✅ Import Footer

// Define Props Type for Layout
interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title = 'My Portfolio' }: LayoutProps) {
  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>{title}</title>
        <meta name="description" content="My Portfolio Website showcasing my work" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* ✅ Navigation Bar (Desktop & Mobile) */}
      <Nav openNav={function (): void {
              throw new Error('Function not implemented.');
          } } />
      <MobileNav nav={false} closeNav={function (): void {
              throw new Error('Function not implemented.');
          } } />

      {/* ✅ Main Page Content */}
      <main>{children}</main>

      {/* ✅ Footer */}
      <Footer />
    </>
  );
}
