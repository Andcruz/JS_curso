let  produtos = document.getElementById("produtos")
console.log("JS funcionando")

let camisas = [
    {time:'Palmeiras', preco:'R$ 199,00'},
    {time:'Flamengo', preco:'199,00'},
    {time:'Barcelona', preco:'399,00'}
]

camisas.forEach(camisa => {

    let card = document.createElement("div")
    card.className = "card"

    let nome = document.createElement("h3")
    nome.innerText = camisa.time

    let preco = document.createElement("p")
    preco.innerText = camisa.preco

    let botao = document.createElement("button")
    botao.innerText = "Comprar"

    card.append(nome, preco, botao)

    produtos.append(card)
})