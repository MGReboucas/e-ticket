let getElement = document.getElementById.bind(document);

function comprar(){
     //to take values type and amount
     let type = getElement('tipo-ingresso');
     let amount = parseInt(getElement('qtd').value);

     if(type.value == 'pista'){
          comprarPista(amount);
     } else if (type.value == 'superior') {
          comprarSuperior(amount);
     } else {
          comprarInferior(amount);
     }
     //reduce the amount of tickets
}

function comprarPista(amount) {
     let amountTrackTickets = parseInt(getElement('qtd-pista').textContent);
     
     if(amount > amountTrackTickets) {
          alert('Quantidade indisponivel para tipo pista');
     } else {
          amountTrackTickets = amountTrackTickets - amount;
          getElement('qtd-pista').textContent = amountTrackTickets;
          alert('Compra realizada com sucesso');
     }
}

function comprarSuperior(amount) {
     let amountTopTickets = parseInt(getElement('qtd-superior').textContent);

     if(amount > amountTopTickets) {
          alert('Quantidade indisponivel para tipo superior');
     } else {
          amountTopTickets = amountTopTickets - amount;
          getElement('qtd-superior').textContent = amountTopTickets;
          alert('Compra realizada com sucesso');
     }
}

function comprarInferior(amount){
     let amountBottomTickets = parseInt(getElement('qtd-inferior').textContent);
     
     if(amount > amountBottomTickets) {
          alert('Quantidade indisponivel para tipo inferior');
     } else {
          amountBottomTickets = amountBottomTickets - amount;
          getElement('qtd-inferior').textContent = amountBottomTickets;
          alert('Compra realizada com sucesso');
     }
}