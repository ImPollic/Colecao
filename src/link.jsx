function Link ({symbol, url}) {
    return <div className="link">
        <img src={symbol} alt="simbolo" onClick={() => window.open(url)}/>
    </div>
}
export default Link