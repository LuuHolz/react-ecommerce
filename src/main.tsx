import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './Pages/Routes/AppRoutes';
import './Styles/index';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
