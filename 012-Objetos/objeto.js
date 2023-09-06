amigo = {
    nome : 'José',
    sexo : 'masculino',
    peso: 85.4,
    engordar(p){
        this.peso += p
    }
    
}

amigo.engordar(5)

console.log(`O amigo tem o nome de ${amigo.nome} é do sexo ${amigo.sexo} e pesa ${amigo.peso}`)