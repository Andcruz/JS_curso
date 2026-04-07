function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
//hora = 19
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    //BOM DIA!
    img.src = 'amanhecer.png'
    document.body.style.background = '#dac7b8'
    msg2.innerHTML = 'BOM DIA!'
} else if (hora >= 12 && hora < 18) {
    // BOA TARDE!
    img.src = 'entardecer.png'
    document.body.style.background = '#cd4b00ff'
    msg2.innerHTML = 'BOA TARDE!'
} else {
    //BOA NOITE!
    img.src = 'anoitecer.png'
    document.body.style.background = '#001125'
    msg2.innerHTML = 'BOA NOITE!'
}
}