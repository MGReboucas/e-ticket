let getElement = document.getElementById.bind(document);

function comprar(){
     //to take values type and amount
     let type = getElement('tipo-ingresso');
     let amount = parseInt(getElement('qtd').value);

     if(type.value == 'pista'){
          comprarPista(amount);
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