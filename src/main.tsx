import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router";
import ThemeProvdier from "./context/ThemeContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvdier>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </ThemeProvdier>
  </StrictMode>,
)
