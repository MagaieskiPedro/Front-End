// abstração : entendimento de problema e trazer para código
// estrutra de dados : variaveis(int,float,str) + conjuntos(lista,tupla,dict)
// modularidade : orientação a objetos e funções reutilização
// simplicidade : dividir o problema em pedaços menores
// Funções são blocos de código reutilizavel, colocado no topo da pagina e usando a palavra reservada "function" em JS

function Saudar(){
    alert("Saudações habitantes do mundo")
}
// function soma(a = 0, b = 0){
//     return a + b;
// }
// function converteMaiuscula(texto){
//     return texto.toUpperCase();
// }
// Arrow function é a nova estrutura de funções para resoluções mais simplorias, declarado como constante e fazendo tratativa como uma variavel
// A ideia é que seja sempre a execução de um código especifico
// constante nome da variavel recebe parametros e depois o que quero que seja executado:

// EX 1
const soma = (v1,v2) => v1+v2
const subtracao = (v1,v2) => v1-v2
const multiplicar = (v1,v2) => v1*v2
const dividir = (v1,v2) => v1/v2
// EX 2
const inverteTexto = (texto) => texto.split("").reverse().join("")

// EX 3
const separaTexto = (texto) => texto.split("")
// EX 4
const poderaDirigir = (idade) => {return idade>=18 ? "Pode tirar carteira e dirigir":"Não pode tirar carteira ou dirigir"}
// EX 5
const insereNumeros = (numero1,numero2,numero3) => { 
    var lista = [numero1,numero2,numero3] 
    return lista.sort()
}
// EX 6 
const horaParaMin = (hora) => hora*60
// EX 7 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! TERMINAR ISSO AQUI
const cedulas = (valor) => { 
    let duzentos = 0;
    let cem = 0;
    let cinquenta = 0;
    let vinte = 0;
    let dez = 0;
    let cinco = 0;
    let um = 0
    while (valor > 0){
        if(valor%200==0){
            valor - 200;
            duzentos += 1;
        }else if(valor%100==0){
            valor - 100;
            cem += 1;
        }else if(valor%50==0){
            valor - 50;
            cinquenta += 1;
        }else if(valor%20==0){
            valor - 50;
            vinte += 1;
        }else if(valor%10==0){
            valor - 50;
            dez += 1;
        }else if(valor%5==0){
            valor - 5;
            cinco += 1;
        }else if(valor%1==0){
            valor - 1;
            um += 1;
        }
    }
    
    return `Duzentos: ${duzentos}  Cem: ${cem} Cinquenta: ${cinquenta} Vinte: ${vinte} Dez: ${dez} Cinco: ${cinco} Um: ${um}`
    
}
// EX 8
const raizQuad = (numero) => Math.sqrt(numero)

// Execução
alert(cedulas(300))
// Saudar();
// a = Number(prompt("Informe um valor"));
// b = Number(prompt("Informe outro valor"));
// document.writeln(soma(a,b));

// texto = prompt("Escreva seu texto");
// convertido = converteMaiuscula(texto);
// document.writeln(convertido);