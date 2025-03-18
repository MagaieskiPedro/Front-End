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
        if(valor/200>=0){
            valor -= 200;
            duzentos += 1;
        }else if(valor/100>=0){
            valor -= 100;
            cem += 1;
        }else if(valor/50>=0){
            valor -= 50;
            cinquenta += 1;
        }else if(valor/20>=0){
            valor -= 50;
            vinte += 1;
        }else if(valor/10>=0){
            valor -= 50;
            dez += 1;
        }else if(valor/5>=0){
            valor -= 5;
            cinco += 1;
        }else if(valor/1>=0){
            valor -= 1;
            um += 1;
        }
    }
    
    return `Duzentos: ${duzentos}  Cem: ${cem} Cinquenta: ${cinquenta} Vinte: ${vinte} Dez: ${dez} Cinco: ${cinco} Um: ${um}`
    
}
// EX 8
const raizQuad = (numero) => Math.sqrt(numero)
// EX 9
function salvar(event){
    event.preventDefault();
    if (props.nome == ""){
        alert("campo nome vazio")
    }else if(props.endereco == ""){
        alert("campo endereco vazio")
    }else if(props.sexo == "vazio"){
        alert("campo sexo vazio")
    }else if(props.telefone == ""){
        alert("campo telefone vazio")
    }else if(props.celular == ""){
        alert("campo celular vazio")
    }

}
// EX 10
const impostoRenda = (faixaSalarial) => faixaSalarial*0.4
// EX 11
const INSS = (salario,aliquota) => salario*aliquota
// EX 12
const jurosCompostos = (valorInicial,tempo) => valorInicial*(1+0.25)**tempo
// EX 13
const financiamento = (valorPrincipal,taxa,numeroParcelas) => (valorPrincipal*taxa)/(1-(1+taxa)**-numeroParcelas)
// Execução
document.writeln(` <p>`)
document.writeln(`${soma(4,2)} soma <p>`)
document.writeln(`${subtracao(4,2)} subtração <p>`)
document.writeln(`${multiplicar(4,2)} multiplicação <p>`)
document.writeln(`${dividir(4,2)} divisão <p>`)
document.writeln(`${inverteTexto('texto')} inverte texto <p>`)
document.writeln(`${separaTexto('texto')} separa texto <p>`)
document.writeln(`${poderaDirigir(18)} pode tirar carteira? <p>`)
document.writeln(`${insereNumeros(1,2,3)} embaralha numeros <p>`)
document.writeln(`${horaParaMin(12)} hora para min <p>`)
document.writeln(`${cedulas(350)} cedulas para pagamento <p>`)
document.writeln(`${raizQuad(100)} raiz quadrada <p>`)
document.writeln(`${salvar()} formulario salvar <p>`)
document.writeln(`${impostoRenda (100)} imposto de renda <p>`)
document.writeln(`${INSS(100)} INSS <p>`)
document.writeln(`${jurosCompostos(100)} juros compostos <p>`)
document.writeln(`${financiamento(100)} financiamento <p>`)

// Saudar();