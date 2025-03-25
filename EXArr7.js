//EX7
let nomes = ["joão","maria","carlos","carla","julio","julia","marcos","mariana","lulu","luana"]
let confirma = 0
let tentativas = 5;

let comparar = window.prompt("Digite um nome para procurar na lista de nomes: ")
do{
    nomes.forEach(nome => {
        if(nome === comparar){
            document.writeln(`<span>${nome} = ${comparar}</span>`)
            confirma = 1
        }else{
            window.alert("Nome não encontrado")
            tentativas -=1
        }
    });
}while(confirma ==0 && tentativas >0)

