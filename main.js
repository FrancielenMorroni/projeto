 // Defina a data final da contagem regressiva
 const dataFinal = new Date('2024-06-29 23:59:59').getTime();

 // Atualiza a contagem regressiva a cada segundo
 const interval = setInterval(() => {
     // Obtém a data e hora atuais
     const agora = new Date().getTime();
     
     // Calcula a diferença entre a data final e a data atual
     const diferenca = dataFinal - agora;
     
     // Calcula o tempo restante em dias, horas, minutos e segundos
     const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
     const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
     const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
     
     // Exibe o tempo restante na página
  
     document.getElementById('dias').textContent = formatTime(dias);
     document.getElementById('horas').textContent = formatTime(horas);
     document.getElementById('minutos').textContent = formatTime(minutos);
     document.getElementById('segundos').textContent = formatTime(segundos);

     // Verifica se o tempo chegou a zero
     if (diferenca < 0) {
         clearInterval(interval); // Para a contagem regressiva
         document.getElementById('contador').innerHTML = 'Chegou o Dia!';
     }
 }, 1000); 

 function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();