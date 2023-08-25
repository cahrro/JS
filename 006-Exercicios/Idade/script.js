function verificarIdade(){
    data = new Date()
    ano = data.getFullYear()
    anoNasc = document.getElementById('txtano')
    resultado = document.getElementById('resultado')
    if(anoNasc.value.length == 0 || anoNasc.value > ano ) {
        window.alert('Verifique os dados e tente novamente')
    } else{
        sexo = document.getElementsByName('radsex')
        idade = ano - anoNasc.value
        genero = ''
        img = document.createElement('img')
        img.setAttribute('id','foto')
        if (sexo[0].checked){
            genero = 'feminino'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', img/CriancaMenina.jpg )
            } else if (idade < 21){
                img.setAttribute('src', img/JovemMulher.jpg )
            } else if (idade < 50){
                img.setAttribute('src', img/AdultoMulher.jpg )
            }  else{
                img.setAttribute('src', img/IdosoMulher.jpg )
            }
        } else if (sexo[1].checked){
            genero = 'masculino'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', img/CriancaMenina.jpg )
            } else if (idade < 21){
                img.setAttribute('src', img/JovemMulher.jpg )
            } else if (idade < 50){
                img.setAttribute('src', img/AdultoMulher.jpg )
            }  else{
                img.setAttribute('src', img/IdosoMulher.jpg )
        }
        
        }
        
        resultado.innerHTML = `Você é do gênero ${genero} e tem ${idade} anos`
        resultado.appendChild('img')
    }
}
