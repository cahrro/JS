function  fatorial(n){
    if (n == 1){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

/* Aqui está uma explicação passo a passo da função fatorial com um exemplo usando fatorial(5):

A função fatorial(n) é chamada com n igual a 5.

A função verifica se n é igual a 1. Como n não é igual a 1 (neste caso, n é igual a 5), a função prossegue para o próximo passo.

A função retorna n * fatorial(n-1). Neste caso, n é igual a 5, então a função retorna 5 * fatorial(4).

Agora, a função fatorial(4) é chamada. O processo se repete com n igual a 4.

A função fatorial(4) verifica se n é igual a 1. Como n não é igual a 1, a função retorna 4 * fatorial(3).

A função fatorial(3) é chamada, e o processo continua até chegar a fatorial(1).

Quando a função fatorial(1) é chamada, ela verifica que n é igual a 1 e retorna 1, pois esse é o caso base da recursão.

Com os resultados retornados, a função fatorial(2) retorna 2 * 1, a função fatorial(3) retorna 3 * 2, a função fatorial(4) retorna 4 * 6, e, finalmente, a função fatorial(5) retorna 5 * 24.

O valor final retornado é 5 * 24, que é igual a 120.

Portanto, console.log(fatorial(5)) imprimirá 120 no console, pois é o fatorial de 5. A recursão é usada aqui para que a função possa ser aplicada de forma repetida, resolvendo o problema do fatorial de forma incremental até chegar ao caso base, que é quando n é igual a 1. */