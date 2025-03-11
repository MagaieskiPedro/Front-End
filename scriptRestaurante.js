function CalcularTotal(){
    let precoPrato = parseFloat(document.getElementById("prato").value);
    let quantidade = parseInt(document.getElementById("quantidade").value)
    if(precoPrato === 0 || quantidade === 0){
        alert("Acho que esqueceu de selecionar algo")
        document.getElementById("resultado").textContent = "Informação incorreta";
    }else{
        let total = precoPrato * quantidade
        document.getElementById("resultado").textContent = `O valor total é de ${total}`
    }
}
