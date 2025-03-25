//EX2
let notas = [1,2,3,4,5,6,7,8]
let total = 0
for(let valores of notas){
    total+=valores
}
document.writeln(`${notas} são as notas <p>`)
document.writeln(`${total/8} é a média <p>`)