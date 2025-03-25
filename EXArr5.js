//EX5 
let valoresCorretos = []
for(i=0;i<8;i++){
    let num = window.prompt("Digite um numero para encontrar numeros entre 100 e 200: ")
    if(num>100 && num<200){
        valoresCorretos.push(num)
    }else{
        window.alert("valor inválido")
    }
}
if(valoresCorretos.length > 0){
    document.writeln(`<span>todos os numeros entre 100 e 200 são: ${valoresCorretos} </span>` )
}