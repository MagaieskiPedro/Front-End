// Variaveis: espaçõ em memoria que armazena valores
//variaveis: let(varea),const(não varea), array armazena varios valores em um conjunto que comeca com o indice 0

//array é declarado com []
let vetor = ['A','E','I','O','U'];
let numeros = ['1','2','3','4','5']
document.writeln(`<p>`)
// exibição dos indices
// for(let indice in vetor){
//     alert(indice);
// }

//exibição dos valores :
// for(let valores of vetor){
//     alert(valores);
// }

// inserir no final do array
vetor.push('う')
document.writeln(`${vetor} inserir ultimo <p>`)
// inserir no começo do array
vetor.unshift('あ')
document.writeln(`${vetor} inserir primeiro <p>`)
// excluir ultimo
vetor.pop()
document.writeln(`${vetor} apagar ultimo <p>`)
// excluir primeiro
vetor.shift()
document.writeln(`${vetor} apagar primeiro <p>`)

//percorrer o Array com o foreach
vetor.forEach(resultado = (valor) => document.writeln(`${valor} para cada <br>`))

let numerosQuadrados =  numeros.map(n => n ** 2)
document.writeln(`${numerosQuadrados} mapeia numeros ao quadrado <p>`)

//Map: cria uma copia do array e aplica mudança desejada nele
let maiusculo = vetor.map(nome => nome.toUpperCase())
document.writeln(`${maiusculo} mapeia em maiusculo lista <p>`)

// Filter: gera outro array com os valores filtrados
let numerosPares = numeros.filter(pares = (numero) => numero%2 ===0)
document.writeln(`${numerosPares} filtra lista <p>`)

// find: ele percorre um array original, quando encontra condição ele para de percorrer e retorna esse valor
let primeiroPar = numeros.find(par = (numero) => numero%2 === 0)
document.writeln(`${primeiroPar} encontra na lista <p>`)
// spread: como junto dois arrays
let livrosP = ['ler um café e tomar uma poesia','pra vc que teve um dia ruim','extraordinario']
let livrosC = ['Diario de um banana', 'It a coisa', 'harry potter']

catalogo = [...livrosP,...livrosC]
document.writeln(`${catalogo} <p> mescla listas`)
//EX1
let cincVal = [1,2,3,4,5] 
let dobro = cincVal.map(n => n*2)
document.writeln(`${dobro} dobro da lista <p>`)
//EX2
let notas = [1,2,3,4,5,6,7,8]
let total = 0
for(let valores of notas){
    total+=valores
}
document.writeln(`${total/8} é a média <p>`)
//EX3
let valores = []
let valoresMedia = []
let media = 0
for(i=0;i<20;i++){
    let num = window.prompt("Digite um numero")
    valores.push(num)
    media += num
}
media = media/20
for(let valores of valores){
    if(valores > media){
        valoresMedia.push(valores)
    }
}
document.writeln(`lista ${valores} media ${media} valores acima media ${valoresMedia} <p>`)
//EX4
let parouimpar = []
for(i=0;i<10;i++){
    let num = window.prompt("Digite um numero")
    parouimpar.push(num)
}
let filtroPares  = parouimpar.filter(par = (nu) => nu%2 ===0)
if(filtroPares.length <= 0){
    document.writeln('todos os numeros são impares <p>')
}else{
    document.writeln(`${filtroPares} são os pares <p>` )
}
//EX5 terminar