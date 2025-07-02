
function comprar(){
     //to take values type and amount
     let getElement = document.getElementById.bind(document);
     let type = getElement('tipo-ingresso');
     let amount = getElement('qtd');

     alert(`${type.value} , ${amount.value}`);

     //reduce the amount of tickets
}