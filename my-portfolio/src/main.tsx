import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import Header from './pages/Header.tsx'
import { Footer } from './components/Footer.tsx'
import ScrollToTop from './components/ScrollToTop.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <ScrollToTop/>
    <Header />
      <App />
      <Footer/>
    </HashRouter>
  </StrictMode>,
)
