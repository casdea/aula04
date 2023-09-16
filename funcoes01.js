entrada => processamento => saida

console.log(typeof Object)
console.log(typeof Function)

const VALOR_HORA = 45.98;

//tradicionais JAVA SCRITP
var calculoSalario = function(horasTrabalhadas) {
    return horasTrabalhadas * VALOR_HORA;
}

let calculoSalario2 = function(horasTrabalhadas) {
    return horasTrabalhadas * VALOR_HORA;
}

const calculoSalario3 = function(horasTrabalhadas) {
    return horasTrabalhadas * VALOR_HORA;
}

console.log(calculoSalario);
console.log(calculoSalario2);
console.log(calculoSalario3);

console.log(typeof calculoSalario);
console.log(typeof calculoSalario2);
console.log(typeof calculoSalario3);

let valor1 = calculoSalario(10);
let valor2 = calculoSalario2(20);
let valor3 = calculoSalario3(30);

console.log(valor1,valor2, valor3);

let calculaValorHoraExtra = function(quantidadeHorasExtras)
{
    let aninhada = function(x) {

        return 10*x;
    }

    return aninhada(10*quantidadeHorasExtras);
}

console.log(calculaValorHoraExtra(30));

let calculaSalario4 = function calcula(x) {
    return 10*x;
}

console.log(calculaSalario4(9));

let calculaSalario5 = x => 10*x;

let calcularArea = (b, a) => { 
    if (a == 1) a = 10;
    
    return b * a;
};


console.log(calculaSalario5(10));

console.log(calcularArea(10,1));

let cliente = {
    nome : "CARLOS",
    idade : 52,
    altura: 1.77,
    cor : "parda",
    estadocivil : "casado",
    vinculoEmpregiticio : "Qintess"
}

console.log(cliente);
console.log(typeof cliente);

const funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[6]()
funcs[8]()

/*

//tradicionais TYPE SCRITP
var calculoSalario = function(horasTrabalhadas : number) : number
{
    return horasTrabalhadas * VALOR_HORA;
}

//JAVA
public double calculoSalario(int horasTrabalhadas) 
{
    return horasTrabalhadas * VALOR_HORA;
}

*/