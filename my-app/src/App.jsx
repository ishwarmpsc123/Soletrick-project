import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./Component/Layout";
import Screener from "./Pages/Screener"
import Products from './Pages/Products'
import Projects from './Pages/Projects'
import Services from './Pages/Services'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Whyus from './Pages/Whyus'
import Offers from './Pages/Offers'
import Terms from './Component/Terms';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout wrap */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Screener />} />
                    <Route path="screener" element={<Screener />} />

          <Route path="products" element={<Products />} />
          <Route path="projects" element={<Projects />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="why" element={<Whyus />} />
          <Route path="offer" element={<Offers />} />
          <Route path="contact" element={<Contact />} />
                    <Route path="terms" element={<Terms />} />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App