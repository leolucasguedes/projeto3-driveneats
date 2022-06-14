let plate = null;
let drink = null;
let dessert = null;
let platePrice = null;
let drinkPrice = null;
let dessertPrice = null;
let total = null;

let counter = 0;

function selecionarPrato(div, description, price) {
    desmarcarProduto('plate');
    
    // marca
    div.classList.add("selected");
    plate = description;
    platePrice = price;
    counter = counter + 1;
  
    liberarFechamento();
  }
  
  function selecionarBebida(div, description, price) {
    desmarcarProduto('drink');
    
    // marca
    div.classList.add("selected");
    drink = description;
    drinkPrice = price;
    counter = counter + 1;
  
    liberarFechamento();
  }
  
  function selecionarSobremesa(div, description, price) {
    desmarcarProduto('dessert');
  
    // marca
    div.classList.add("selected");
    dessert = description;
    dessertPrice = price;
    counter = counter + 1;
  
    liberarFechamento();
  }
  
  function liberarFechamento() {
    const botao = document.querySelector("footer button");
    if(counter === 3) {
      botao.disabled = false;
      botao.innerHTML = "Fechar pedido";
      botao.classList.add("able");
    } else {
      botao.disabled = true;
      botao.innerHTML = "Selecione os 3 itens para fechar o pedido";
      botao.classList.remove("able");
    }
  }
  
  function desmarcarProduto(produto) {
    const produtoSelecionado = document.querySelector(`.${produto}.selected`);
    if(produtoSelecionado !== null) {
      produtoSelecionado.classList.remove("selected");
      counter = counter - 1;
    }
  }
  
  function fecharPedido() {
    const linkDaMensagem = montaMensagemWhatsApp();
    window.open(linkDaMensagem, '_blank').focus();
  }
  
  
  function revisarPedido() {
    document.querySelector(".check").classList.remove("hide");
  
    document.querySelector(".finalPlate").innerHTML = plate;
    document.querySelector(".finalPlatePrice").innerHTML = `R$ ${platePrice.toFixed(2)}`;
    document.querySelector(".finalDrink").innerHTML = drink;
    document.querySelector(".finalDrinkPrice").innerHTML = `R$ ${drinkPrice.toFixed(2)}`;
    document.querySelector(".finalDessert").innerHTML = dessert;
    document.querySelector(".finalDessertPrice").innerHTML = `R$ ${dessertPrice.toFixed(2)}`
  
    document.querySelector(".totalPrice").innerHTML = `R$ ${(platePrice + drinkPrice + dessertPrice).toFixed(2)}`
  }
  
  function fecharPedido() {
    window.open(montaMensagemWhatsApp(), '_blank').focus();
  }
  
  function refazerPedido() {
    document.querySelector(".check").classList.add("hide");
  }
  
  function montaMensagemWhatsApp() {
    const numero = "5521999626248";
    const total = (platePrice + drinkPrice + dessertPrice).toFixed(2);
  
    let mensagem = `Olá, gostaria de fazer o pedido:
      - Prato: ${plate}
      - Bebida: ${drink}
      - Sobremesa: ${dessert}
      Total: R$ ${total}
    `;
  
    mensagem = encodeURIComponent(mensagem);
    return `https://wa.me/${numero}?text=${mensagem}`;
  }