//EX4
let parouimpar = []
for(i=0;i<10;i++){
    let num = window.prompt("Digite um numero para encontrar pares e impares")
    parouimpar.push(num)
}
let filtroPares  = parouimpar.filter(par = (nu) => nu%2 ===0)
if(filtroPares.length <= 0){
    document.writeln('<span>todos os numeros são impares </span>')
}else{
    document.writeln(`<span>${filtroPares} são os pares </span>` )
}