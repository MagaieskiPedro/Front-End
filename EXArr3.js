//EX3
let valores = []
let valoresMedia = []
let media = 0
for(i=0;i<20;i++){
    let num = window.prompt("Digite um numero: ")
    valores.push(num)
    media += parseInt(num)
}
media = media/20
for(let valor of valores){
    if(valor > media){
        valoresMedia.push(valor)
    }
}
document.writeln(`<span>lista [${valores}] media [${media}] valores acima media [${valoresMedia}] </span>`)