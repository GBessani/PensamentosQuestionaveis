let frase = [" Hitler estava certo "," o planeta seria melhor sem mulheres "," Homofobia "," Racismo "," Anão de 20 anos "," um traveco "," todos os DJs deveriam morrer "," anão de sunga "," morrer no pacifico "," chutar fetos "," padre safado "," assassinar criancinhas no quarto "," invadir uma creche com armas "," volta da escravidão "," aborto legalizado "," hiroshima "," bin laden matou foi pouco "," legalizar as armas no brasil "," uso irresponsavel de drogas pesadas "]

function Sortear(){
    let comeco = document.getElementById('inicio').value
    let termino = document.getElementById('final').value
    let opcao = parseInt(Math.random() *frase.length)
    let resultado = comeco + frase[opcao] + termino
    alert(resultado)
}

