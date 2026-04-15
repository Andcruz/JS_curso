function tabuada() {
    let num = document.getElementById('txt1')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('⚠️ Digite um número!') 
    } else {      
        let n = Number (num.value)
        tab.innerHTML = ''
        for (let i = 1; i <= 10; i ++) {
            let item = document.createElement('option')
            item.text = (`${n} X ${i} = ${n*i}`) 
            tab.append(item) 
        }
    }        
}