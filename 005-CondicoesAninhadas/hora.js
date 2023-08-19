var agora = new Date() /* Aqui contem data e hora atuais */
var hora = agora.getHours() /* Aqui ele pega apenas as horas do agora */
var minutos = agora.getMinutes()

console.log(`Agora são ${hora}:${minutos}`)

if(hora < 12){
    console.log('Bom Dia krl')
} else if (hora < 18){
    console.log('Tardezinha')
} else{
    console.log('Boa noite :D')
}