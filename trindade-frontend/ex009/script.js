


var listaDeNumeros = []
num = 0

function reset() {
    listaDeNumeros = []
    num = 0
    resultados.innerHTML = `<hr>~`
    valoresAdicionados.innerHTML = `<hr>~`
}

function apagarUltimo(){
    listaDeNumeros.pop()
    valoresAdicionados.innerHTML += `<br>Número ${num} adicionado. Agora temos ${listaDeNumeros}`
    resultados.innerHTML = `~`
}

//apagar ultimo numero adicionado

function adicionarNumero() {    
    
    num = Number(numeroDigitado.value) 

       

        
    if (num == 0 || num > 100 || listaDeNumeros.indexOf(num) !== -1){
        window.alert('ERRO! Valor invalido ou ja encontrado na lista')
    } else {            
        listaDeNumeros.push(num)
        valoresAdicionados.innerHTML += `<br>Número ${num} adicionado. Agora temos ${listaDeNumeros}`
        resultados.innerHTML = `~`
    }
}

//https://www.youtube.com/watch?v=XdkW62tkAgU&list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm&index=23



function finalizarAnalise(){

    if (num == 0){
        window.alert('ERRO! Adicione valores antes de finalizar.')
    } else {
        listaDeNumeros.sort(function(a, b){return a-b}) //sort() consertado para numeros

        totalDeNumAdd = listaDeNumeros.length
        ultimaPosicao = listaDeNumeros.length - 1    
        var somaDeTodos = 0
        
        for (var i = 0; i < totalDeNumAdd; i++) {        
            somaDeTodos += listaDeNumeros[i]
        }  
        var media =  somaDeTodos / totalDeNumAdd
        resultados.innerHTML = `<p>Ao todo, temos ${listaDeNumeros.length} números cadastrados.</p>
        <p>O maior valor adicionado foi ${listaDeNumeros[ultimaPosicao]}.</p>  
        <p>O menor valor adicionado foi ${listaDeNumeros[0]}</p>    
        <p>Somando todos valores, temos ${somaDeTodos}.</p>    
        <p>A média dos valores digitados é ${media.toFixed(2)}.</p>`
    }
    
}