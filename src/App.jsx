import Jogo from './jogo.jsx'
import Link from './link.jsx'
import './style.css'

function App () {
  return <>
    <header>
      <p>PollicStudio</p>
      <div className='colecao-links'>
        <Link symbol="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL5nfANU8FeiGhWBzT1lHiREh8CH-ZuDpoeicbPD1_aESvkNvtrwB9kzLwynj_grJdSM0&usqp=CAU" url={"https://github.com/ImPollic"}/>
        <Link symbol="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYQIqzv3klUwYdw6gGu46ZGaLUndElkWqDwA&s" url={"https://x.com/4pollos2"}/>
        <Link symbol="https://i.pinimg.com/736x/50/66/1d/50661d782c12872a1a20de032267147c.jpg" url={"https://www.youtube.com/@pollic"}/>
        <Link symbol="https://i.pinimg.com/736x/91/82/6a/91826a460e293270c9bb411c5151784e.jpg" url={"https://www.chess.com/member/impollic"}/>
      </div>
    </header>
    <main>    
      <div className='informes'>
        <h1><span>&lt;/&gt;</span> Coleção de Jogos</h1>
        <h3>Por Apollo Pollic <span className='autor'>impollic_</span></h3>
      </div>
      <div className='extras'>
        <p>Durante esse anos, desenvolvi alguns jogos quando tive tempo livre. Assim, venho desta forma apresentar uma parte desses projetos. Links serão disponibilizados posteriormente para que você possa acessá-los.</p>
      </div>
      <div className='area-textos'>
        <Jogo imagemurl="./imagens/Quimica.png" descricao={"Revolta Quimica"} url={['https://impollic.github.io/Revolta-Quimica']}/>
        <Jogo imagemurl="./imagens/causa.png" descricao={"Projeto Fortunato"} url={['https://drive.google.com/drive/folders/1FyR0kRRQm8t_wp8IhIYiWaLKETu3NBxu?usp=sharing']}/>
        <Jogo imagemurl="./imagens/Touhou.png" descricao={"Embodiment of the Scarlet Devil"} url={['https://impollic.github.io/Touhou6v1']}/>
        <Jogo imagemurl="./imagens/Nivellya.png" descricao={"Projeto Nivellya (Web & Java)"} url={['https://replit.com/@Pollic/Nivellya-Beta-251-BugFix-Version', 'https://impollic.github.io/NivellyaWebsite']}/>  
        <Jogo imagemurl="./imagens/Pokemon.png" descricao={"Batalha Pokémon"} url={[]}/>  
        <Jogo imagemurl="./imagens/kaythe.png" descricao={"Pollic & Kaythe Adventure"} url={['https://replit.com/@Pollic/Pollic-Adventure-Revamp?v=1']}/>  
      </div>
    </main>
    <footer>Feito por impollic_ utilizando <a href='https://react.dev/' target='_blank'>React</a> em 01/03/2025</footer>
  </>
}
export default App