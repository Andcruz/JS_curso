let  produtos = document.getElementById("produtos")

let camisas = [
    {time:'Palmeiras 25/26 Torcedor', preco:'R$ 199,00', imagem:'img/palmeiras1.jpg'},
    {time:'Flamengo 25/26 Torcedor', preco:'199,00', imagem:'img/flamengo1.jpg'},
    {time:'Barcelona 25/26 Torcedor', preco:'399,00', imagem:'img/barça1.jpg'}
]

camisas.forEach(camisa => {

    let card = document.createElement("div")
    card.className = "card"
//nome do time
    let nome = document.createElement("h4")
    nome.innerText = camisa.time
    //Imagem das camisas
        let img = document.createElement("img")
        img.src = camisa.imagem
        img.alt = camisa.time
//Preço da camisa
    let preco = document.createElement("p")
    preco.innerText = camisa.preco
//Botão de compra
    let botao = document.createElement("button")
    botao.innerText = "Comprar"

    card.append(nome, img, preco, botao)

    produtos.append(card)
})