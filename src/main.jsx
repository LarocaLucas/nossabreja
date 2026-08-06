import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-dom/client'; // Importando BrowserRouter aqui ou no App.jsx, mas o vite cria o main.jsx
import App from './App.jsx';
import './estilos/reset.css';
import './estilos/tokens.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
