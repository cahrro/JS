function contar() {
    var iniciotxt = document.getElementById('iniciotxt');
    var fimtxt = document.getElementById('fimtxt');
    var passotxt = document.getElementById('passotxt');
    var resultado = document.getElementById('contagem');

    if (iniciotxt.value.length == 0 || fimtxt.value.length == 0 || passotxt.value.length == 0) {
        alert('Dados incompletos');
    } else {
        resultado.innerHTML = 'Contando... <br>';
        let inicio = Number(iniciotxt.value);
        let fim = Number(fimtxt.value);
        let passo = Number(passotxt.value);


        if (passo > 0){
            for(let contador = inicio; contador <= fim; contador += passo){
                resultado.innerHTML += contador + ' ';
            }
        } else if(passo < 0 ){
            for(let contador = inicio; contador >= fim; contador += passo){
                resultado.innerHTML += contador + ' '
            }
        } else if(inicio < fim){
            for(let contador = inicio; contador <= fim; contador += passo){
                resultado.innerHTML += contador + ' ';
            }
        } else if(inicio>fim){
            for(let contador = inicio; contador >= fim; contador -= passo){
                resultado.innerHTML += contador + ' '
            }
        }
        else{
            alert('O pulo não pode ser igual a 0')
            resultado.innerHTML = ' '
        }
        

    }
}