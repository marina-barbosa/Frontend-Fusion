
function verificarIdade() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoNascimento = document.getElementById('anoNascimento')
    var imgRedonda = document.querySelector('div#imgRedonda')

    if (anoNascimento.value.length == 0 || anoNascimento.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')        
    } else {
        var generoMarcado = document.getElementsByName('radsex')
        var idade = ano - Number(anoNascimento.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (generoMarcado[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade < 6){
                //bb
                img.setAttribute('src','pexels-meninobebe.jpg')
            } else if (idade < 15){
                //criança
                img.setAttribute('src','pexels-meninocriança.jpg')
            } else if (idade < 25){
                //jovem adulto
                img.setAttribute('src','pexels-jovemadulto.jpg')
            } else if (idade < 40){
                //adulto
                img.setAttribute('src','pexels-homemadulto.jpg')
            } else {
                //idoso
                img.setAttribute('src','pexels-homemidoso.jpg')
            }
        } else if (generoMarcado[1].checked) {
            genero = 'mulher'            
            if (idade >=0 && idade < 6){
                //bb
                img.setAttribute('src','pexels-meninabebe.jpg')
            } else if (idade < 15){
                //criança
                img.setAttribute('src','pexels-meninacriança.jpg')
            } else if (idade < 25){
                //jovem adulto
                img.setAttribute('src','pexels-jovemadulta.jpg')
            } else if (idade < 40){
                //adulto
                img.setAttribute('src','pexels-mulheradulta.jpg')
            } else {
                //idoso
                img.setAttribute('src','pexels-mulheridosa.jpg')
            }
            
            
        }
        imgRedonda.style.textAlign = 'center'
        imgRedonda.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        imgRedonda.appendChild(img)
            
        
    }

}