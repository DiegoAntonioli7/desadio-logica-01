let heroi = ["Bob",1000]

function saberNivel(exp){
    if(exp <= 1000){
        return "Ferro"
    }
    if(exp <= 2000){
        return "Bronze"
    }
    if(exp <= 5000){
        return "Prata"
    }
    if(exp <= 7000){
        return "Ouro"
    }
    if(exp <= 8000){
        return "Platina"
    }
    if(exp <= 9000){
        return "Ascendente"
    }
    if(exp <= 10000){
        return "Imortal"
    }
    if(exp > 10000){
        return "Radiante"
    }
}

console.log("O Herói de nome "+heroi[0] +" está no nível de " + saberNivel(heroi[1]))