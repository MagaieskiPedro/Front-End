//EX9
let vetorA = []
let vetorB = []
let vetorC = []
let numA =0
let numB =0
for(i=0;i<5;i++){
    numA = window.prompt("Digite um numero para armazenar na lista1: ");
    vetorA.push(numA);
    vetorC.push(numA);
    numB = window.prompt("Digite um numero para armazenar na lista2: ");
    vetorB.push(numB);
    vetorC.push(numB);   
}
document.writeln(`<span>lista1 ${vetorA}</span>`)
document.writeln(`<span>lista2 ${vetorB}</span>`)
document.writeln(`<span>lista mesclada ${vetorC}</span>`)