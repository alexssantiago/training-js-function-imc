function imc(peso, altura, callback) {

    const imc = peso / (altura * altura);

    alert(`IMC: ${imc.toFixed(2)}`);
    if (callback && typeof callback === 'function') {
        alert(`Classificação: ${callback(imc)}`);
    }
}

function classificacaoImc(indice) {
    if (indice <= 16.9) {
        return 'Muito abaixo do peso';
    } else if (indice <= 18.4) {
        return 'Abaixo do peso';
    } else if (indice <= 24.9) {
        return 'Peso normal';
    } else if (indice <= 29.9) {
        return 'Acima do peso';
    } else if (indice <= 34.9) {
        return 'Obesidade Grau I';
    } else if (indice <= 40) {
        return 'Obesidade Grau II';
    } else {
        return 'Obesidade Grau III';
    }
}

const btnCalcular = document.querySelector('#calcular-imc');
const item = btnCalcular.closest('.grupo');

btnCalcular.addEventListener('click', function () {
    
    var peso = Number(item.querySelector('#input-peso').value);
    var altura = Number(item.querySelector('#input-altura').value);

    imc(peso, altura, classificacaoImc);
});