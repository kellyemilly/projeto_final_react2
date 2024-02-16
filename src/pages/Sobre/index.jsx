import fluxoImg from '../../assets/fluxo.png'
import fotoPerfil from '../../assets/foto-perfil.png'
import styles from './Sobre.module.css'

const Sobre = () => {
  return (
    <>
      <div className={styles.header}>
        <h1>
          Escreva sobre você!!!
        </h1>
        <div>
            <img src={fotoPerfil} alt="Foto de Perfil" />
        </div>
      </div>

      <div className={styles.containerSobre} >
          <h1 className={styles.nomeCompleto}>Kelly Emilly</h1>
          <h2 className={styles.profissao}>Estudante</h2>
          <p className={styles.sobreMim}>
            Olá, me chamo Kelly Emilly, tenho 21 anos, estou em processo de descoberta de carreira e buscando
            novos conhecimentos. No momento estou bastante interessada na área de tecnologia mais expecificamente
            na parte de desenvolver sites e descobri isso com o Ciclo Formativo Básico da Pretalab nele aprendi sobre
            Github, HTML, CSS, Javascript e react. Curti muito essa experiência de aprender com elas, foi muito bom.
              
          </p>
      </div>

      <div className={styles.subtitulo}>
        <img src={fluxoImg} />
        <p>
        Este guia estruturado direciona as devas desde os conceitos básicos até as nuances avançadas 
        do React, proporcionando uma compreensão abrangente da biblioteca. 
        </p>
      </div>

      <div className={styles.containerVideo}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ss3Njo-FUDE?si=DfSY306Gj48sXBIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
        <div className={styles.tituloSobre}>
          Aprenda com as duas Amandas a deixar seu Linkedin potente como você!!!
        </div>
      </div>
    </>
  )
}

export default Sobre;