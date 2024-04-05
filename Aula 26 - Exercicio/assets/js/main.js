function variaveisCalculo(evento) {
    evento.preventDefault();
    let peso = document.querySelector('#input-peso');
    let altura = document.querySelector('#input-altura');
    let resultado = document.querySelector('#resultado');

    let numPeso = peso.value;
    let numAltura = altura.value;
    let imc = calculaImc(numAltura, numPeso);

    if (imc < 18.5) {
        resultado.className = 'cor-imc-1'
        resultado.innerHTML = `Seu IMC é ${imc} (Abaixo do peso)`
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado.className = 'cor-imc-2'
        resultado.innerHTML = `Seu IMC é ${imc} (Peso normal)`
    } else if (imc >24.9 && imc <= 29.9) {
        resultado.className = 'cor-imc-3'
        resultado.innerHTML = `Seu IMC é ${imc} (Sobrepeso)`
    } else if (imc > 29.9 && imc <= 34.9) {
        resultado.className = 'cor-imc-4'
        resultado.innerHTML = `Seu IMC é ${imc} (Obesidade grau 1)`
    } else if (imc > 34.9 && imc <= 39.9) {
        resultado.className = 'cor-imc-5'
        resultado.innerHTML = `Seu IMC é ${imc} (Obesidade grau 2)`
    } else if (imc > 39.9) {
        resultado.className = 'cor-imc-6'
        resultado.innerHTML = `Seu IMC é ${imc} (Obesidade grau 3)`
    }

    addEventListener('submit', variaveisCalculo)
}
const form = document.querySelector('.form');
form.addEventListener('submit', variaveisCalculo); // Adicionando o ouvinte ao formulário

function calculaImc(altura, peso) {
    let valorAltura = Number(altura);
    let valorPeso = Number(peso);
    let imc = valorPeso/(valorAltura*valorAltura);
    let imcArredondado = imc.toFixed(2);
    
    return imcArredondado
}
