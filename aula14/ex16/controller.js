function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pass = document.getElementById('txtp')
    let res = document.getElementById('res') 

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        res.innerHTML = '⚠️ Faltam dados!'
        window.alert("⚠️ Preencha todos os Dados!")
    } else {
        res.innerHTML = 'Contando: <br>'
       let i = Number (ini.value)
       let f = Number (fim.value)
       let p = Number (pass.value)
       if (p <= 0){
            window.alert('Passo invalido! Considerndo PASSO 1')
            p = 1
       }
        
       if (i < f) {
           for (let c = 1; c <= f; c += p ) { // Contagem crescente
               res.innerHTML += ` ${c} 👉`
           }
       } else {
           for (let c = i; c >= f; c -= p) { // Contagem crescente
               res.innerHTML += `👈 ${c}`
           }
       }
       res.innerHTML += `\u{1f3c1}`

    } 

   /* let i = Number (inicio.value)
    let f = Number (fim.value)
    let p = Number (passo.value)

    
    if (p <= 0){
        alert('Passe invalido! Considerar passo 1')
        p = 1
    }
    rs.innerHTML = 'Contando : <br>'
        
    */

} 
