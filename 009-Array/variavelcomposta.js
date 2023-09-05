num = [3,2,5,6,8,1,0]
console.log(`Tenho uma variável com: ${num}`)

nummaior = num.sort()
console.log(`Ela agora esta em ordem crescente: ${nummaior}`)

num.push(999)
console.log(`Foi adicionado o 999 à ela ${num}`)

posicao = num.indexOf(2)

if (posicao == -1){
    console.log(`Valor não encontrado`)
} else{
    console.log(`O valor buscado está na posição ${posicao}`)
}