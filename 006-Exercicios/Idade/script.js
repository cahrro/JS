function verificarIdade(){
    data = new Date()
    ano = data.getFullYear()
    anoNascimento = document.getElementById('txtano').value
    result = document.getElementById('resultado')

    if (anoNascimento.length == 0 || anoNascimento>ano){
        window.alert('Revise os dados e tente novamente')
    } else{
        RadioSex = document.getElementsByName('radsex') 
        idade = ano - anoNascimento
        genero = ''
        imagem = document.createElement('img')
        imagem.setAttribute('id','foto')


        if (RadioSex[0].checked){
            genero = 'feminino'
            if (idade >= 0 && idade < 10){
                imagem.setAttribute('src', 'img/CriancaMenina.jpg')
            } else if (idade < 21){
                imagem.setAttribute('src', 'img/JovemMulher.jpg')
            } else if (idade < 50){
                imagem.setAttribute('src', 'img/AdultoMulher.jpg')
            } else{
                imagem.setAttribute('src', 'img/IdosoMulher.jpg')
            }


        }else if (RadioSex[1].checked){
            genero = 'masculino'
            if (idade >= 0 && idade < 10){
                imagem.setAttribute('src', 'img/CriancaMenino.jpg')
            } else if (idade < 21){
                imagem.setAttribute('src', 'img/JovemHomem.jpg')
            } else if (idade < 50){
                imagem.setAttribute('src', 'img/AdultoHomem.jpg')
            } else{
                imagem.setAttribute('src', 'img/IdosoHomem.jpg')
            }
        }
        result.innerHTML = `Pessoa do gênero ${genero} com ${idade} anos`
        result.appendChild(imagem)
    }

}