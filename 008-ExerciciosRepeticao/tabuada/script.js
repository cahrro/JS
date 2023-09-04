function calcular(){
    let numtxt = document.getElementById('txtnum')
    let tabuadaCampo = document.getElementById('tabuada')

    if (numtxt.value.length == 0){
        alert('Digite um número')
    } else {
        num = Number(numtxt.value)
        c = 1
        tabuadaCampo.innerHTML = ''

        for (c; c <= 10; c++){
            item = document.createElement('option')
            item.text = `${num} * ${c} = ${num*c}`
            tabuadaCampo.appendChild(item)

        }
    }
}