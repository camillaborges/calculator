let historic = [];

function select(sum, subtraction, multiplication, division) {

   function sum(fieldOne, fieldTwo) {
      return parseInt(fieldOne) + parseInt(fieldTwo);
   }

   function subtraction(fieldOne, fieldTwo) {
      return parseInt(fieldOne) - parseInt(fieldTwo);
   }

   function division(fieldOne, fieldTwo) {
      return parseInt(fieldOne) / parseInt(fieldTwo);
   }

   function multiplication(fieldOne, fieldTwo){
      return parseInt(fieldOne) * parseInt(fieldTwo);
   }

   const fieldOperator = document.querySelector('.operator');
   const fieldOne = document.querySelector('.field-one').value;
   const fieldTwo = document.querySelector('.field-two').value;
   let result;
   const operation = fieldOperator.value;

   switch (operation) {
    case '+':  
      result = sum(fieldOne, fieldTwo);
    break;
    case '-':
      result = subtraction(fieldOne,fieldTwo);
    break;
    case '*':
      result = multiplication(fieldOne, fieldTwo);
    break;
    case '/':
      result = division(fieldOne, fieldTwo);  
   }

   document.querySelector('.result').innerHTML = result;
   document.querySelector('.form-calculator').reset();   
   

   let item = {fieldOne, fieldTwo, result, operation};
   historic.push(item);

   insertHistoryItem(item);
}

function insertHistoryItem(item) {
  let div = document.createElement('div'); // is a node
  div.innerHTML = `<div class='item'> ${item.fieldOne} ${item.operation} ${item.fieldTwo} = ${item.result}</div>`;
  document.querySelector('.historical-result').appendChild(div);
}

function deleteHistory() {
 document.querySelector('.result').innerHTML = '';
 document.querySelector('.historical-result').innerHTML = '';
 
 
}
