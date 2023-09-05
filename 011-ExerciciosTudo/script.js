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

function analisae(){
    if (valores.length == 0){
        alert('Informe um número')
    }
}