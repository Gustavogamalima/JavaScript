const btn = document.querySelector('#send');    

btn.addEventListener("click", function(event) {
    event.preventDefault();

    let nome = document.querySelector('#name').value;

    let altura = document.querySelector('#altura').value;

    let peso = document.querySelector('#peso').value;

    if(nome !== '' && altura !== '' && peso !== ''){
        calcularImc(peso, altura, nome);
    } else {
        validacao();
    };
});

function calcularImc(peso, altura, nome) {
    let imc = (peso / (altura**2)).toFixed(1);
    let resp = '';

    if(imc < 18.5) {
        resp = `${nome} seu IMC é ${imc} e você está abaixo do peso.`;
    } else if (imc < 24.9) {
        resp = `${nome} seu IMC é ${imc} e você com peso ideal. Parabéns!!!`;
    } else if (imc < 30) {
        resp = `${nome} seu IMC é ${imc} e você está levemente acima do peso.`;
    } else if (imc < 35){
        resp = `${nome} seu IMC é ${imc} e você está com obesidade grau I.`;
    }  else if (imc < 40){
        resp = `${nome} seu IMC é ${imc} e você está com obesidade grau II.`;
    } else {
        resp = `${nome} seu IMC é ${imc} e você está com obesidade grau III. Cuidado!!!`;
    };

    let resultado = document.querySelector('#resultado');
   
    return  resultado.innerHTML = resp;

};

function validacao(){
    let resultado = document.querySelector('#resultado');

    return resultado.innerHTML = 'Preencha todos os campos.'
};

