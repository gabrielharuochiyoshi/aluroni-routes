import NossaCasa from 'assets/nossa_casa.png'
import cardapio from 'data/itens.json'
import styles from './inicio.module.scss'
import stylesTema from 'styles/tema.module.scss'

export function Inicio() {
  let pratosRecomendados = [...cardapio]
  pratosRecomendados = pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .splice(0, 3)
  return (
    <section>
      <h3 className={stylesTema.titulo}>Recomendações da Cozinha</h3>

      <div className={styles.recomendados}>
        {pratosRecomendados.map((item) => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
              <button className={styles.recomendado__botao}>Ver mais</button>
            </div>
          </div>
        ))}
      </div>

      <h3 className={stylesTema.titulo}>Nossa casa</h3>
      <div className={styles.nossaCasa}>
        <img src={NossaCasa} alt="Casa do Aluroni" />
        <div className={styles.nossaCasa__endereco}>
          Rua Endereço, 8182 <br />
          <br /> Um bairro - MG
        </div>
      </div>
    </section>
  )
}
