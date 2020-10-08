function dimensionarBET() {
  console.log('ECCUS BET!!!');
  // faz leitura das entradas
  var temperatura = document.getElementById('temperatura').value;
  var limpeza = document.getElementById('limpeza').value;
  var pessoas = document.getElementById('pessoas').value;

  // calcula as variaveis
  volume = temperatura * limpeza;
  area = volume + 10;
  profundidade = pessoas + 10;
  volumeTotal = volume * 2;

  // imprime as variaveis
  document.getElementById('volume').value = volume;
  document.getElementById('area').value = area;
  document.getElementById('profundidade').value = profundidade;
  document.getElementById('volumeTotal').value = volumeTotal;
}
