import { ReactComponent as Logo } from 'assets/logo.svg'
import { Link } from 'react-router-dom'
import styles from './menu.module.scss'

export function Menu() {
  const rotas = [
    {
      label: 'Início',
      to: '/',
    },
    {
      label: 'Cardápio',
      to: '/cardapio',
    },
    {
      label: 'Sobre',
      to: '/sobre',
    },
  ]

  return (
    <div className={styles.menu}>
      <Logo />
      <ul className={styles.menu__list}>
        {rotas.map((rota, i) => (
          <li key={i} className={styles.menu__link}>
            <Link to={rota.to}>{rota.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
