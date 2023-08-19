dataAtual = new Date()
diaSemana = dataAtual.getDay()


switch (diaSemana){
        case 0:
            console.log('Domingão')
        break

        case 1:
            console.log('Segundona braba')
        break
    
        case 2:
            console.log('Terça')
        break

        case 3:
            console.log('Quarta ainda afs')
        break

        case 4:
            console.log('Quinta - final de semana chegando já')
        break

        case 5:
            console.log('Sexta - krl essa semana passou mt rápido')
        break

        case 6:
            console.log('Sábado aeeee :D')
        break

        default:
            console.log('[ERRO] esse dia da semana nem existe D:')

}