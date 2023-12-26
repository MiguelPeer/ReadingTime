const inicio = Date.now();

for (let i = 0; i < 10000000000; i++) {
}

const fim = Date.now();
const tempoTotalMilissegundos = fim - inicio;

let tempoFormatado;
let unidade;

if (tempoTotalMilissegundos < 1000) {
  tempoFormatado = `${tempoTotalMilissegundos} milissegundos`;
  unidade = 'milissegundos';
} else {
  const horas = Math.floor(tempoTotalMilissegundos / 3600000);
  const minutos = Math.floor((tempoTotalMilissegundos % 3600000) / 60000);
  const segundos = Math.floor((tempoTotalMilissegundos % 60000) / 1000);
  const milissegundos = tempoTotalMilissegundos % 1000;

  tempoFormatado = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}.${String(milissegundos).padStart(3, '0')}`;
  unidade = horas > 0 ? 'horas' : minutos > 0 ? 'minutos' : 'segundos';
}

console.log(`A leitura do txt levou ${tempoFormatado} (${unidade}).`);