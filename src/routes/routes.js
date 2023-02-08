import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Cardapio } from 'pages/Cardapio'
import { Inicio } from 'pages/inicio'
import { Sobre } from 'pages/Sobre'
import { Menu } from 'components/Menu'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { NotFound } from 'pages/NotFound'
import { Prato } from 'pages/Prato'

export function AppRoutes() {
  return (
    <main className="container">
      <BrowserRouter>
        <Menu />

        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="sobre" element={<Sobre />} />
          </Route>
          <Route path="/prato/:id" element={<Prato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  )
}
