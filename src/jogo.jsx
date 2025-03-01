function abrir (url) {
    if (typeof url == typeof []) {
        for (let urls of url) {
            window.open(urls);
        }
    }
}
function Jogo ({ imagemurl, descricao, url }) {
    return <div onClick={() => abrir(url)} className="componente">
        <p className="jogo-nome">{descricao}</p>
        <img src={imagemurl} alt="imagem" />
    </div>
}
export default Jogo