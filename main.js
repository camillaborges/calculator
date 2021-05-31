let historic = [];

function escolha(soma, sub, division, multiplicacion) {

   function soma(num1, num2) {
      return parseInt(num1) + parseInt(num2);
   }

   function sub(num1, num2) {
      return parseInt(num1) - parseInt(num2);
   }

   function division(num1, num2) {
      return parseInt(num1) / parseInt(num2);
   }

   function multiplicacion(num1, num2) {
      return parseInt(num1) * parseInt(num2);
   }

   const operetion = document.querySelector(".operador");
   let num1 = document.querySelector(".num1").value;
   let num2 = document.querySelector(".num2").value;
   
   let resultado;
   const operation = operetion.value;
   switch (operation) {
      case "+":
         resultado = soma(num1, num2);
         break;
      case '-':
         resultado = sub(num1, num2);
         break;
      case '*':
         resultado = multiplicacion(num1, num2);
         break;
      case '/':
         resultado = division(num1, num2);
   }

   document.querySelector(".resultado").innerHTML = resultado;
   document.querySelector(".myform").reset();


   let item = { num1, num2, resultado, operation };
   historic.push(item);

   insereItemHistorico(item);
}

function insereItemHistorico(item) {
   let div = document.createElement('div'); // is a node
   div.innerHTML = `<div class="item"> ${item.num1} ${item.operation} ${item.num2} = ${item.resultado}</div>`;
   document.querySelector(".result").appendChild(div);
}

function deletaItemHistorico() {
   document.querySelector(".result").innerHTML = " ";
   document.querySelector(".resultado").innerHTML = " ";
}
