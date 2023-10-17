import { Header } from "../../components/Header"
import { PdfContent } from "../../layout/PdfContent"
import ldjImg from './../../assets/Ldj.png'
import ldjPdf from './../../assets/Ldj.pdf'
import MMImg from './../../assets/MM.png'
import MMPdf from './../../assets/MM.pdf'
import GMImg from './../../assets/GM.png'
import GMPdf from './../../assets/GM.pdf'
import { Container } from "./styles"

export const Pdfs = () => {
    const pdfList = [
        {
            id:0,
            img:ldjImg,
            pdf:ldjPdf,
            namePdf:"Livro do jogador",
            nameCreator:"D&D 5e",
            description:"O livro principal da trilogia dos Grandes Livros da 5ª Edição do maior e melhor RPG do mundo! Livro completo com todas as regras para que os jogadores criem os mais diversos tipos de personagens para suas aventuras/campanhas!A versão de regras mais atual do mais famoso RPG do mundo! Feito visando novos e antigos jogadores, a 5ª edição celebra toda a história de sucesso da franquia."
        },
        {
            id:1,
            img:MMImg,
            pdf:MMPdf,
            namePdf:"Manual dos monstros",
            nameCreator:"D&D 5e",
            description:"O Livro dos Monstros reúne um verdadeiro acervo de criaturas icônicas presentes no universo de Dungeons & Dragons, incluindo dragões, gigantes, devoradores de mente e observadores. Este livro é um verdadeiro bestiário, repleto de ideias e criaturas prontas para os Mestres povoarem suas aventuras ou desafiarem os jogadores. Os monstros apresentados no livro fazem parte da ilustríssima história do D&D e já vem acompanhados de estatísticas fáceis de serem usadas, além de estórias eletrizantes para alimentar a sua imaginação. O segundo dos três livros base de regras, este exemplar apresenta a maneira como os personagens podem encontrar as criaturas ao longo de suas aventuras, os lugares onde habitam, além de uma série de referências essenciais para todo Mestre."
        },
        {
            id:2,
            img:GMImg,
            pdf:GMPdf,
            namePdf:"Guia do mestre",
            nameCreator:"D&D 5e",
            description:"O Livro do Mestre traz tudo que os mestres mais exigentes precisam para deixar suas aventuras cada vez mais completas e interessantes para os jogadores! Desde diversos itens mágicos até construção de cenários completos, o Livro do Mestre é essencial em todas as sessões de jogos. O Master Guide é um dos tres livros básicos de Dungeons& Dragons junto do Monster Manual e o Players Handbook Os jogadores irão construir verdadeiras lendas nas sessões de RPG e com um mestre auxiliado pelo Master Guide, aventuras épicas esperam seu grupo! O Guia Mestre é um dos três livros básicos de Dungeons & Dragons com o Manual do Monstro e o Manual do Jogador."
        }
    ]
    return <>
        <Header/>
        <Container>
            {pdfList.map((el, index) => 
                <PdfContent 
                key={index}
                img={el.img}
                pdf={el.pdf}
                namePdf={el.namePdf}
                nameCreator={el.nameCreator}
                description={el.description}/>)}
        </Container>
        
    </>
}