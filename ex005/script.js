

var agora = new Date(); 
var hora = agora.getHours();
var minutos = agora.getMinutes();

phora.innerHTML = `<br/>Agora são exatamente ${hora} horas e ${minutos} minutos.`

//hora = 14

if (hora >= 6 && hora <= 12 ) {
    var conteudoDaDiv = window.document.getElementById('cumprimento')
    conteudoDaDiv.innerHTML = `<p>Bom dia!</p> <img src="pexels-manha.jpg">`        
} else if (hora >= 12 && hora <= 18) {         
    var conteudoDaDiv = window.document.getElementById('cumprimento')
    conteudoDaDiv.innerHTML = `<p>Boa tarde!</p> <img src="pexels-tarde.jpg">`  
} else { //18~24:
    var conteudoDaDiv = window.document.getElementById('cumprimento')
    conteudoDaDiv.innerHTML = `<p>Boa noite!</p> <img src="pexels-noite.jpg">` 
    
        
}

