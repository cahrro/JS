var num = document.getElementById('txtnum')
var lista = document.getElementById('analisador')
var resultado = document.querySelector('article.resultado')
var valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inlista(n,l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }

}

function adicionar(){
   /*  if (num.length == 0){
        alert('Digite um número para continuar')
    } else{
    }
 */
    if(isNumero(num.value) && !inlista(num.value,valores) ){
        lista.style.display = 'inline-block'
        document.getElementById('analisarbtn').style.display = 'inline-block'
        valores.push(Number(num.value))
        item = document.createElement('option')
        item.text = `${num.value} foi adicionado`
        lista.appendChild(item)

    }else{
        alert('Valor inválido ou já presente na lista')
    }

    num.value = ''
    num.focus()

}

function analisar(){
    if (valores.length == 0){
        alert('Informe um número')
    } else {
        let totalqntd = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            media = soma/totalqntd
            if(valores[pos]>maior){
                maior = valores[pos]
            } else if(valores[pos]<menor){
                menor = valores[pos]
            }
        }

        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo, tem ${totalqntd} valores </p>`
        resultado.innerHTML += `<p>O maior valor é ${maior} </p>`
        resultado.innerHTML += `<p>O menor valor é ${menor} </p>`
        resultado.innerHTML += `<p>A soma das valores é igual á ${soma} <br> e a média é igual á ${media.toFixed(2)} </p>`

    }
}