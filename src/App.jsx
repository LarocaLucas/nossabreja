import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

// Componentes Layout
import Header from './componentes/Header';
import Footer from './componentes/Footer';

// Paginas
import Home from './paginas/Home';
import Agenda from './paginas/Agenda';
import Galeria from './paginas/Galeria';
import GaleriaEvento from './paginas/GaleriaEvento';
import Cardapio from './paginas/Cardapio';

// Scroll to top ao trocar de rota
function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/galeria/:slug" element={<GaleriaEvento />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
