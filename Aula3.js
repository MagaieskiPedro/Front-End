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