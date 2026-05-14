import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Portfolio from "./components/Portfolio";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-50 bg-page-mesh">
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <Stats />
        <Portfolio />
        <Clients />
      </main>
      <Footer />
    </div>
  );
}
