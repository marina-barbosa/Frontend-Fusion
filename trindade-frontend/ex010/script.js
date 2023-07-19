
let listaDeNumerosMedia = []
let numMedia = 0

function resetMedia() {
    listaDeNumerosMedia = []
    numMedia = 0
    resultadosMedia.innerHTML = `~`
    valoresAdicionadosMedia.innerHTML = `~`
}

function apagarUltimoMedia(){
    listaDeNumerosMedia.pop()
    valoresAdicionadosMedia.innerHTML = `<br>${listaDeNumerosMedia}`
    resultadosMedia.innerHTML = `~`
}

function adicionarNumeroMedia() {     
    numMedia = Number(numeroDigitadoMedia.value)          
                
    listaDeNumerosMedia.push(numMedia)
    valoresAdicionadosMedia.innerHTML = `<br>${listaDeNumerosMedia}`
    resultadosMedia.innerHTML = `~`    
}

function finalizarMedia(){
    if (numMedia == 0){
        window.alert('ERRO! Adicione valores antes de finalizar.')
    } else {
        listaDeNumerosMedia.sort(function(a, b){return a-b}) //sort() consertado para numeros

        totalDeNumAdd = listaDeNumerosMedia.length
        ultimaPosicao = listaDeNumerosMedia.length - 1    
        let somaDeTodos = 0
        
        for (let i = 0; i < totalDeNumAdd; i++) {        
            somaDeTodos += listaDeNumerosMedia[i]
        }  
        let media =  somaDeTodos / totalDeNumAdd
        resultadosMedia.innerHTML = `<p>A média dos valores digitados é ${media.toFixed(2)}</p>`
    }
    
}
let listaDeNumerosPrimo = []
let numPrimo = 0

function resetPrimo() {
    listaDeNumerosPrimo = []
    numPrimo = 0
    resultadosPrimo.innerHTML = `~`
    valoresAdicionadosPrimo.innerHTML = `~`
}

function apagarUltimoPrimo(){
    listaDeNumerosPrimo.pop()
    valoresAdicionadosPrimo.innerHTML += `<br>Número ${numPrimo} adicionado. Agora temos ${listaDeNumerosPrimo}`
    resultadosPrimo.innerHTML = `~`
}

function adicionarNumeroPrimo() {     
    numPrimo = Number(numeroDigitadoPrimo.value) 
    
    if (numPrimo === 1){
        window.alert('O número 1 não é primo')
    } else if (numPrimo <= 0 || listaDeNumerosPrimo.indexOf(numPrimo) !== -1){
        window.alert('ERRO! Valor invalido ou ja encontrado na lista')
    } else {            
        listaDeNumerosPrimo.push(numPrimo)
        valoresAdicionadosPrimo.innerHTML += `<br>Número ${numPrimo} adicionado. Agora temos ${listaDeNumerosPrimo}`
        resultadosPrimo.innerHTML = ``
    }
}

function finalizarPrimo(){
    if (numPrimo === 0){
        window.alert('ERRO! Adicione valores antes de finalizar.')
    } else {
        listaDeNumerosPrimo.sort(function(a, b){return a-b}) 
        
        for(let n of listaDeNumerosPrimo){
          let contador = 0;
          for(let i=1; i<n+1; i++){
            if(n%i === 0){
              contador++;
            }
          }                     
          resultadosPrimo.innerHTML += `O número ${n} é: ${contador > 2 ? 'Composto.' : 'Primo.'}<br>`
        } 
        
    }
    
}


let listaDeNumerosMDC = []
let numMDC = 0

function resetMDC() {
    listaDeNumerosMDC = []
    numMDC = 0
    resultadosMDC.innerHTML = `~`
    valoresAdicionadosMDC.innerHTML = `~`
}

function apagarUltimoMDC(){
    listaDeNumerosMDC.pop()
    valoresAdicionadosMDC.innerHTML += `<br>Número ${numMDC} adicionado. Agora temos ${listaDeNumerosMDC}`
    resultadosMDC.innerHTML = `~`
}

function adicionarNumeroMDC() {    
    
    numMDC = Number(numeroDigitadoMDC.value)  
        
    if (numMDC < 2 || listaDeNumerosMDC.indexOf(numMDC) !== -1){
        window.alert('ERRO! Valor invalido')
    } else {            
        listaDeNumerosMDC.push(numMDC)
        valoresAdicionadosMDC.innerHTML += `<br>Número ${numMDC} adicionado. Agora temos ${listaDeNumerosMDC}`
        resultadosMDC.innerHTML = `~`
    }
}

function calcularMDCArray(numeros) {
    // Função para calcular o MDC entre dois números
    function calcularMDC2(a, b) {
      if (b === 0) {
        return a;
      } else {
        return calcularMDC2(b, a % b);
      }
    }
  
    // Verificar se a matriz está vazia
    if (numeros.length === 0) {
      return null; // ou algum valor padrão que faça sentido no seu contexto
    }
  
    let mdc = numeros[0]; // Iniciar com o primeiro número
  
    for (let i = 1; i < numeros.length; i++) {
      mdc = calcularMDC2(mdc, numeros[i]);
    }
  
    return mdc;
  }  

  // Exemplo de uso:
function finalizarMDC(){
  var resultado = calcularMDCArray(listaDeNumerosMDC);  
  // Imprimir o resultado usando resultadosMDC.innerHTML 
  resultadosMDC.innerHTML = `<br>${resultado}`;
}




let listaDeNumerosMMC = []
let numMMC = 0

function resetMMC() {
    listaDeNumerosMMC = []
    numMMC = 0
    resultadosMMC.innerHTML = `~`
    valoresAdicionadosMMC.innerHTML = `~`
}

function apagarUltimoMMC(){
    listaDeNumerosMMC.pop()
    valoresAdicionadosMMC.innerHTML += `<br>Número ${numMMC} adicionado. Agora temos ${listaDeNumerosMMC}`
    resultadosMMC.innerHTML = `~`
}

function adicionarNumeroMMC() {    
    
    numMMC = Number(numeroDigitadoMMC.value)  
        
    if (numMMC < 2 || listaDeNumerosMMC.indexOf(numMMC) !== -1){
        window.alert('ERRO! Valor invalido')
    } else {            
        listaDeNumerosMMC.push(numMMC)
        valoresAdicionadosMMC.innerHTML += `<br>${listaDeNumerosMMC}`
        resultadosMMC.innerHTML = `~`
    }
}

function calcularMMC(numeros) {
    // Função para calcular o MDC (Máximo Divisor Comum)
    function calcularMDC(a, b) {
      if (b === 0) {
        return a;
      } else {
        return calcularMDC(b, a % b);
      }
    }
  
    // Função para calcular o MMC usando o MDC
    function calcularMMC2(a, b) {
      return (a * b) / calcularMDC(a, b);
    }
  
    // Verificar se a matriz está vazia
    if (numeros.length === 0) {
      return null; // ou algum valor padrão que faça sentido no seu contexto
    }
  
    let mmc = numeros[0]; // Iniciar com o primeiro número
  
    for (let i = 1; i < numeros.length; i++) {
      mmc = calcularMMC2(mmc, numeros[i]);
    }
  
    return mmc;

}
function finalizarMMC(){
    // Exemplo de uso:
    var numeros = listaDeNumerosMMC;
    var resultado = calcularMMC(numeros);
    //console.log(resultado); // Saída: 90
    resultadosMMC.innerHTML = `<br>${resultado}`

}



    
