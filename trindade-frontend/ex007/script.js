

function contar() {
    var contando = document.querySelector('div#contando')
    var numInicial = Number(inicio.value)
    var numFinal = Number(final.value)
    var numPasso = Number(passo.value)

    if (inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        contando.innerHTML = `Contando: `
        for(let i = numInicial; i <= numFinal; i += numPasso){
            contando.innerHTML += `${i} \u{1F449}`
        }

    }
    contando.innerHTML += `\u{1F3C1}`
}    
    

    
    
    
    
    

