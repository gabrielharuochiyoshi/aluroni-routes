import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Cardapio } from 'pages/Cardapio'
import { Inicio } from 'pages/inicio'
import { Sobre } from 'pages/Sobre'
import { Menu } from 'components/Menu'
import { Header } from 'components/Header'

export function AppRoutes() {
  return (
    <main>
      <BrowserRouter>
        <Menu />

        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="sobre" element={<Sobre />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}
