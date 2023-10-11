let produto = document.getElementById("produto");
let submit = document.getElementById("submit");
let fruta = document.getElementById("fruta");
let limpeza = document.getElementById("limpeza");
let bebida = document.getElementById("bebida");
let besteira = document.getElementById("besteira");
let lista = document.getElementById("lista");

let frutaLista = document.getElementById("frutaLista");
let limpezaLista = document.getElementById("limpezaLista");
let bebidaLista = document.getElementById("bebidaLista");
let besteiraLista = document.getElementById("besteiraLista");


let frutas = new Array("fruta");
let limpezas = new Array("limpeza");
let bebidas = new Array("bebida");
let besteiras = new Array("besteira");

let check = 0;

function veirificarCheck(){

    if(fruta.checked){
        check = 1;
        adicionarItem()
    } else if (limpeza.checked){
        check = 2;
        adicionarItem()
    } else if (bebida.checked){
        check = 3;
        adicionarItem()
    } else if (besteira.checked){
        check = 4;
        adicionarItem()
    } else {
        alert("Selecione uma categoria");
    }


}

function verificarInput() {
    let nomeProduto = produto.value;
    if(nomeProduto == ""){
        alert("Preencha o campo para adicionar um item")
    } else {
        veirificarCheck()
    }

}

function adicionarItem(){
    let nomeProduto = produto.value;

    if(check == 1){
        frutas.push(nomeProduto);
        frutaLista.innerHTML += "<li>" + nomeProduto + "</li>";
    } else if (check == 2){
        limpezas.push(nomeProduto);
        limpezaLista.innerHTML += "<li>" + nomeProduto + "</li>";
    } else if (check == 3){
        bebidas.push(nomeProduto);
        bebidaLista.innerHTML += "<li>" + nomeProduto + "</li>";
    } else if (check == 4){
        besteiras.push(nomeProduto);
        besteiraLista.innerHTML += "<li>" + nomeProduto + "</li>";
    }

    produto.value = "";
    
    let limparFruta = document.getElementsByName("fruta");
    for(let i = 0; i < limparFruta.length ;i++){
       limparFruta[i].checked = false;
    }
    let limparLimpeza = document.getElementsByName("fruta");
    for(let i = 0; i < limparLimpeza.length ;i++){
       limparLimpeza[i].checked = false;
    }
    let limparBebida = document.getElementsByName("fruta");
    for(let i = 0; i < limparBebida.length ;i++){
       limparBebida[i].checked = false;
    }
    let limparBesteira = document.getElementsByName("fruta");
    for(let i = 0; i < limparBesteira.length ;i++){
       limparBesteira[i].checked = false;
    }


console.log(check)
console.log(frutas)
console.log(limpezas)
console.log(bebidas)
console.log(besteiras)
}



submit.addEventListener("click", verificarInput);