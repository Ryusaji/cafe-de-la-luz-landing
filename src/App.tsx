import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppBtn from './components/WhatsAppBtn';

function App() {
  return (
    <div className="bg-luxury-50 min-h-screen selection:bg-luxury-900 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <WhatsAppBtn />
    </div>
  );
}

export default App;
