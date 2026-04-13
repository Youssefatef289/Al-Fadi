import { Outlet } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';

export default function Layout() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
