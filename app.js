let frase = [" Hitler estava certo "," o planeta seria melhor sem mulheres "," Homofobia "," Racismo "," Anão de 20 anos "," um traveco "," todos os DJs deveriam morrer "," anão de sunga "," morrer no pacifico "," chutar fetos "," padre safado "," assassinar criancinhas no quarto "," invadir uma creche com armas "," volta da escravidão "," aborto legalizado "," hiroshima "," bin laden matou foi pouco "," legalizar as armas no brasil "," uso irresponsavel de drogas pesadas "," suicidio coletivo "," dar o cu na broderagem "," restaurar o regime nazista "," paraquedas de camisinha "," coito interrompido "," Thais Carla maior que o sol "," tragar cigarro pelo cu "," fumar maconha "," bater na mãe "," sequestro relampago "," assltar o banco central"," a conta de gás de Adolf Hitler "," manter o governo longe do meu penis "," Volta da monarquia no Brasil "," 11 de setembro de 2001 "," agiotagem "," roda de umbanda "," putas que pagam dizimo "," assalto a mão armada "," autismo sempre foi frescura "," O povo quer gozar "," atropelei uma idosa "," pular do avião sem paraquedas ","  "]


function Sortear(){
    let registro = document.getElementById('registros');
    let comeco = document.getElementById('inicio').value;
    let termino = document.getElementById('final').value;
    let opcao = parseInt(Math.random() *frase.length);
    let resultado = comeco + frase[opcao] + termino;
    registro.innerHTML = registro.innerHTML + resultado + "<br>";

}

