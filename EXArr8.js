//EX8
let vetorInteiros = []
let vetorMeios = []
for(i=0;i<6;i++){
    let num = window.prompt("Digite um numero para armazenar na lista: ")
    vetorInteiros.push(num)
    num = num/2
    vetorMeios.push(num)
}
document.writeln(`o vetor A é ${vetorInteiros}`)
document.writeln(`o vetor B é ${vetorMeios}`)