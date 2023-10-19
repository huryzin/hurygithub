function calcularLancamentoVertical(alturaInicial, velocidadeInicial, tempo) {
    const g = 9.81; // Aceleração devida à gravidade (m/s²)

    // Calcular a altura máxima
    const alturaMaxima = (velocidadeInicial ** 2) / (2 * g);

    // Calcular o tempo de voo
    const tempoDeVoo = (2 * velocidadeInicial) / g;

    // Calcular a altura atual
    const alturaAtual = alturaInicial + (velocidadeInicial * tempo) - (0.5 * g * tempo ** 2);

    return {
        alturaMaxima: alturaMaxima.toFixed(2),
        tempoDeVoo: tempoDeVoo.toFixed(2),
        alturaAtual: alturaAtual.toFixed(2)
    };
}

// Exemplo de uso:
const alturaInicial = 10; // Altura inicial em metros
const velocidadeInicial = 20; // Velocidade inicial em m/s
const tempo = 2; // Tempo em segundos

const resultado = calcularLancamentoVertical(alturaInicial, velocidadeInicial, tempo);

console.log(`Altura Máxima: ${resultado.alturaMaxima} metros`);
console.log(`Tempo de Voo: ${resultado.tempoDeVoo} segundos`);
console.log(`Altura Atual: ${resultado.alturaAtual} metros`);
