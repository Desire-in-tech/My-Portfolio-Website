import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, PageTransition } from './components';
import { Home, About, Projects, Contact } from './pages';

function App() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';
  return (
    <BrowserRouter basename={base}>
      <div className="min-h-screen bg-primary-bg text-white">
        <Navbar />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
