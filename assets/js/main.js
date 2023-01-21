const form = document.querySelector('#form');
form.addEventListener('submit', cancelSubmit = (event) => {
    event.preventDefault();
    console.log('Evento Cancelado!');
});

calculaImc = () => {
    let peso = document.getElementById('peso');
    let altura = document.getElementById('altura');
    let pesoConvertido = Number(peso.value);
    let alturaConvertida = Number(altura.value);
    let imc = pesoConvertido/ (alturaConvertida*alturaConvertida);
    let resultado = document.getElementById('resultado');
    if (imc < 18.5) {

        resultado.innerHTML = `<p class="abaixo">Seu IMC é ${imc.toFixed(1)}, e você está: Abaixo do Peso!</p>`;
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado.innerHTML = `<p class="normal">Seu IMC é ${imc.toFixed(1)}, e você está: Normal</p>`;
    } else if (imc >= 25  && imc <= 29.9) {
        resultado.innerHTML = `<p class="acima">Seu IMC é ${imc.toFixed(1)}, e você está: Acima do Peso</p>`;
    } else if (imc >= 30 && imc <= 34.9) {
        resultado.innerHTML = `<p class="obs">Seu IMC é ${imc.toFixed(1)}, e você está: com Obesidade Grau 1</p>`;
    } else if (imc >= 35 && imc <= 39.9) {
        resultado.innerHTML = `<p class="obs">Seu IMC é ${imc.toFixed(1)}, e você está: com Obesidade Grau 2</p>`;
    } else if (imc >= 40) {
        resultado.innerHTML = `<p class="obs">Seu IMC é ${imc.toFixed(1)}, e você está: com Obesidade Grau 3</p>`;
    }  else if (imc =  null) {
        resultado.innerHTML = `<p class="nulo>Erro, faça o processo acima!"</p>`;
    } else if (imc = String || imc == 0) {
        resultado.innerHTML = `<p class="string">Erro, isso não é um número!</p>`;
    } else if (imc = NaN){
        resultado.innerHTML = `<p>Erro!</p>`
    }


};