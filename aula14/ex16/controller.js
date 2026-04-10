function Contar (){
    let init = document.querySelector('div#initPass')
    //let fpass = document.querySelector('div#totalPass')
    //let pul = document.querySelector('div#pularPass')
     let res = document.querySelector('div#res') 
    if (init.value >= 0 || init.value <= 10 ){
        window.alert('[ERRO] némero invalido!')
    }
}
