
function gerarTabuada() {

var num = Number(numeroEscolhido.value)
const ATE_DEZ = 10
var tabuada = document.querySelector('div#tabuada')


if (num <= 0) {
    window.alert('ERRO: Verifique os dados e tente outra vez.')
    
} else {
    tabuada.innerHTML = `Tabuada do ${num}:  `
    for (let index = 1; index <= ATE_DEZ; index++) {
        let res= num*index
        tabuada.innerHTML += `<br>    ${num} x ${index} = ${res} `
        
    }
    
    
}


}