import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Perfil from '../pages/Perfil'
import NotFound from '../pages/NotFound'
import About from '../pages/About'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/perfil/:id" element={<Perfil />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}