//EX7
let nomes = ["joão","maria","carlos","carla","julio","julia","marcos","mariana","lulu","luana"];
let confirma = 0;
let tentativas = 5;

let nome = window.prompt("Digite um nome para procurar na lista de nomes: ");

while(confirma != 1 && tentativas >=1){
    for(i=0;i<10;i++){
        if(nomes[i] === nome){
            window.alert(`${nome} encontrado na posição ${i}`);
            confirma = 1;
            console.log(confirma)
            break;
        }
    }
    if(confirma===0){
        tentativas -= 1;
        console.log(tentativas)
    }
}
if(confirma===0){
    window.alert("Nome não encontrado");
}

