const form = document.querySelector('#form');
form.addEventListener('submit', cancelSubmit = (event) => { // adicionado evento para cancelar o formulario
    event.preventDefault(); // cancelando o submit do formulario
    const inputPeso = document.querySelector('#peso'); // selecionado os elementos via id do html
    const inputAltura = document.querySelector('#altura'); // selecionando pt 2
    const peso = Number(inputPeso.value); // convertendo para number 
    const altura = Number(inputAltura.value); // convertendo pt2
    console.log(peso);
    console.log(altura);
    if (!peso) {
        setResultado('Peso invalido!');
        return;
    }; // validação do peso, com o sinal de exclamação que significa uma negação

    if (!altura) {
        setResultado('Altura invalida!');
        return;
    }; // validação da altura.

    const imc = getImc(peso, altura); // chamando a funcao que ira calcular o imc
    const resultado = getResultado(imc) // funcao q ira exibir o reultado do imc
    const msg = `Seu IMC é ${imc} (${resultado}).`; // exbindo o resultado na tela para o usuario
    setResultado(msg, true); // validando o resultado 
});

getImc = (peso, altura) => { // definindo os parametros para calcular o imc
    const imc = peso/ altura ** 2; // calculo do imc
    return imc.toFixed(1); //casas decimais
} // funcao que calcula o imc e retorna o valor funcao acima.

getResultado = (imc) => { // funcao q ira exibir o resultado do imc
    const resultado = ['Abaixo do peso', 'Peso normal', 'Acima do peso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau3']; // array q ira armazenar o resultado
    if (imc >= 39.9) { // condicoes do imc
        return resultado[5]; // resultado final caso seja a condicao verdadeira
    }
    if (imc >= 34.9) { // condicao 2 caso a 1 nao seja true
        return resultado[4]; // resultado 2
    }
    if (imc >= 29.9) { // condicao 3
        return resultado[3]; // resultado 3
    }
    if (imc >= 24.9) { // condicao 4
        return resultado[2]; // resultado 4
    }
    if (imc >= 18.5) { // condicao 5
        return resultado[1]; // resultado 5
    }
    if (imc < 18.5) { // condicao 6
        return resultado[0]; // resultado 6
    }
}

// funcao para criar paragrafos
criaP = () => {
    const p = document.createElement('p');
    // p.classList.add('paragrafo-resultado'); adicinando classes via javascript
    return p;
};


// create arrow function to set result and create a mensage to send after recived our form
setResultado = (msg, isValid) => { // funcao q cria as mensagens
    const resultado = document.querySelector('#resultado'); // selecionando a div no html
    resultado.innerHTML = ''; // resetando o resultado
    const p = criaP(); // chamando a funcao q cria o paragrafo
    if (isValid) {  // se for valido
        p.classList.add('paragrafo-resultado'); //exibe a mensagem com essa classe aqui
    } else { // se nao valido
        p.classList.add('error'); // exibe a mensagem com essa classe aqui
    }
    p.innerHTML = msg; //intrudozindo a mensagem
    resultado.appendChild(p); // apresentando ela na tela.
};

// check!  