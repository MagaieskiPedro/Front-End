//EX6
let nomes = ["joão","maria","carlos","carla","julio","julia","marcos","mariana","lulu","luana"]
let nome = window.prompt("Digite um nome para procurar na lista de nomes: ")
let confirma = 0
for(i=0;i<10;i++){
    if(nome == nomes[i]){
        document.writeln(`<span>a posição do nome na lista é ${i}</span>`)
        confirma = 1
    }
}
if(confirma==0){
    document.writeln("<span>Nome não foi encontrado na lista</span>")
}