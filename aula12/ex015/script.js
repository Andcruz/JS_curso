function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homen'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-menino1.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-menino15.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-homen30.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-homen70.png')
            }
        } else if (fsex[1].checked) {
                gênero = 'Mulher'
                if (idade >= 0 && idade < 10) {
                    //criança
                    img.setAttribute('src', 'foto-menina1.png')
                } else if (idade < 21) {
                    //jovem
                    img.setAttribute('src', 'foto-menina15.png')
                } else if (idade < 50) {
                    //adulto
                    img.setAttribute('src', 'foto-mulher30.png')
                } else {
                    //idoso
                    img.setAttribute('src', 'foto-mulher70.png')
                }
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
            res.appendChild(img)
            
        }

    }
