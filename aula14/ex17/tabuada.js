function gerarTab() {
    let qnt = document.getElementById('txt1')
    //let qnt2 = document.getElementById('txt2')
    let res = document.getElementById('res')
    /*if (res.value > 1) {
        window.alert('⚠️ Você já tem sua resposta!')
    }*/
    let q = Number (qnt.value)
   // let q2 = Number (qnt2.value)
    for ( i = 1; i <= 10; i ++) {
        let mult = q * i
        res.innerHTML += (`${q} X ${i} = ${mult} <br>`) 
    }        
}