
import { HashRouter, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './pages/Project';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './layout/Layout';
import NoPage from './pages/NoPage';
import Detail from './pages/Detail';


function App() {


  return (
    <HashRouter>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Project />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<Detail />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
