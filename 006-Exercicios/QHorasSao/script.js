function carregar(){
    mensagem = document.getElementById('msg')
    img = document.getElementById('imagem')
    data = new Date()
    horas = data.getHours()
    minutos = data.getMinutes()

    mensagem.innerHTML = `${horas}:${minutos}`

    if (horas >= 6 && horas < 12){
        mensagem.innerHTML += '<p>Bom Dia</p>'
        img.src = 'imgs/manha.jpg'
        document.body.style.background = '#C5BCB2'

    } else if (horas >= 12 && horas < 18){
        mensagem.innerHTML += '<p>Boa Tarde</p>'
        img.src = 'imgs/tarde.jpg'
        document.body.style.background = '#50798F'
    } else{
        mensagem.innerHTML += '<p>Boa Noite</p>'
        img.src = 'imgs/noite.jpg'
        document.body.style.background = '#5F476C'
    }


}