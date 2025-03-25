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
document.writeln(`<span>${vetor} inserir ultimo </span>`)
// inserir no começo do array
vetor.unshift('あ')
document.writeln(`<span>${vetor} inserir primeiro </span>`)
// excluir ultimo
vetor.pop()
document.writeln(`<span>${vetor} apagar ultimo </span>`)
// excluir primeiro
vetor.shift()
document.writeln(`<span>${vetor} apagar primeiro </span>`)

//percorrer o Array com o foreach
vetor.forEach(resultado = (valor) => document.writeln(`<span>${valor} para cada </span> <br>`))

let numerosQuadrados =  numeros.map(n => n ** 2)
document.writeln(`<span>${numerosQuadrados} mapeia numeros ao quadrado </span>`)

//Map: cria uma copia do array e aplica mudança desejada nele
let maiusculo = vetor.map(nome => nome.toUpperCase())
document.writeln(`<span>${maiusculo} mapeia em maiusculo lista </span>`)

// Filter: gera outro array com os valores filtrados
let numerosPares = numeros.filter(pares = (numero) => numero%2 ===0)
document.writeln(`<span>${numerosPares} filtra lista </span>`)

// find: ele percorre um array original, quando encontra condição ele para de percorrer e retorna esse valor
let primeiroPar = numeros.find(par = (numero) => numero%2 === 0)
document.writeln(`<span>${primeiroPar} encontra na lista </span>`)
// spread: como junto dois arrays
let livrosP = ['ler um café e tomar uma poesia','pra vc que teve um dia ruim','extraordinario']
let livrosC = ['Diario de um banana', 'It a coisa', 'harry potter']

catalogo = [...livrosP,...livrosC]
document.writeln(`<span>${catalogo} mescla listas </span>`)