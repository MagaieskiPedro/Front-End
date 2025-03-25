//EX7
let nomes = ["joão","maria","carlos","carla","julio","julia","marcos","mariana","lulu","luana"]
let confirma = 0
let tentativas = 5;
do{
    let nome = window.prompt("Digite um nome para procurar na lista de nomes: ")
    for(i=0;i<10;i++){
        if(nome == nomes[i]){
            document.writeln(` posição do nome na lista é ${i}`)
            confirma = 1
            break;
        }
    }
    if(confirma===0){
        document.writeln("Nome não foi encontrado na lista")
        tentativas--
    }else{
        break;
    }
}while(tentativas > 0)