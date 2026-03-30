var idade = 66
console.log(`Você tem ${idade} anos`)
if (idade < 16) { //Condição aninhada, quando temos uma condição dentro de outra
    console.log('Não vota!')
} else if(idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
console.log('Seu voto é obrigatório')
}
