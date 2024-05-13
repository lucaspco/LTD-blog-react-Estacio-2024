import style from './About.module.css';

const About = () => {
    return (
        <div className={style.about}>
                <h1>Bem-vindo ao nosso blog culinário!</h1>
                <h2>Sobre Nós</h2>
                <p>Este projeto é uma celebração da gastronomia, onde compartilho minhas experiências e descobertas culinárias, enquanto também convido os leitores a contribuírem com suas próprias ideias e receitas. Juntos, vamos criar um espaço onde a paixão pela comida une pessoas de diferentes origens e habilidades na cozinha.</p>
                <h2 className={style.lista}>O Que Esperar</h2>
                <ul className={style.lista}>
                    <li>Receitas Experimentadas e Aprovadas</li>
                    <li>Dicas e Truques Culinários</li>
                    <li>Histórias e Experiências</li>
                    <li>Envolvimento dos Leitores</li>
                </ul>
                <p><span>Então, pegue sua colher de pau e vamos começar essa jornada culinária juntos!</span></p>
        </div>
    )
}
export default About;