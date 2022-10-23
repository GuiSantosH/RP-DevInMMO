import { Itens } from "./About.style"


function About(){
    return(
        <div>
            <h1>Projeto desenvolvido para recuperação</h1>
            <h2>O projeto está com itens faltantes</h2>
            <h3>Caso for autorizado, pretendo realizar a criação dos itens faltantes.</h3>
            <h4>Itens faltantes</h4>
            <Itens>
                <li>Carousel de imagens nos detalhes dos jogos</li>
                <li>Seção de comentários</li>
                <li>Melhor organização do código</li>
            </Itens>
        </div>
    )
}

export default About