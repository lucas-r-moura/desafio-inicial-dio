let nome = 'Lucas '
let xp = 0
let nivelDoHeroi = 'iniciante'
let xpDesejada = 10002

// Resolvi dificultar o desafio para treinar o contéudo aprendido nas aulas.
// Simulei que meu personagem estava mantando monstros para ganhar XP e apartir dai ir "upando" de nível até chegar no nível maximo desejado. 

while (xp < xpDesejada) {
    console.log(nome + 'matou um monstro e ganhou 1000 de experiencia!')
    xp += 1001

    if (xp < 1000) {
        nivelDoHeroi = 'Ferro'
    } else if (xp < 2001) {
        nivelDoHeroi = 'Bronze'
    } else if (xp < 5001) {
        nivelDoHeroi = 'Prata'
    } else if (xp < 7001) {
        nivelDoHeroi = 'Ouro'
    } else if (xp < 8001) {
        nivelDoHeroi = 'Platina'
    } else if (xp < 9001) {
        nivelDoHeroi = 'Ascendente'
    } else if (xp < 10001){
        nivelDoHeroi = 'Imortal'
    } else {
        nivelDoHeroi = 'Radiante'
    }

    switch (nivelDoHeroi){
        case 'Ferro':
            console.log('Voce está no nivel de Ferro')
            break
        case 'Bronze':
            console.log('Voce está no nivel de Bronze')
            break
        case 'Prata':
            console.log('Voce está no nivel de Prata')
            break
        case 'Ouro':
            console.log('Voce está no nivel de Ouro')
            break    
        case 'Platina':
            console.log('Voce está no nivel de Platina')
            break   
        case 'Ascendente':
            console.log('Voce está no nivel de Ascendente')
            break    
        case 'Imortal':
            console.log('Voce está no nivel de Imortal')
            break  
    }

    if(nivelDoHeroi != 'Radiante') {
        console.log('Voce ainda não conquistou seu objetivo, continue!')
    }
    
} 

console.log('O Herói de nome ' + nome +'está no nível de ' + nivelDoHeroi)

