let historic = [];

function select(sum, subtraction, multiplication, division) {

   function sum(fieldOne, fieldTwo) {
      return parseFloat(parseInt(fieldOne) + parseInt(fieldTwo));
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
   const operations = fieldOperator.value;
   const operationSimble = fieldOperator.options[fieldOperator.selectedIndex].innerHTML;
  

   function getOperation(type) {
      let operation = {
         'sum': function() {
            return result = sum(fieldOne,fieldTwo)
         },
         'subtraction': function(){
            return result = subtraction(fieldOne,fieldTwo);
         },
         'division': function(){
            return result = division(fieldOne, fieldTwo);
         },
         'multiplication': function(){
            return result =  multiplication(fieldOne, fieldTwo)
         } 
      };
      return operation[type]();
   }

   let operator = getOperation(operations);

   document.querySelector('.result').innerHTML = Math.round(result*100)/100;
   document.querySelector('.form-calculator').reset();   
   

   let item = {fieldOne, fieldTwo, result, operator, operationSimble};
   historic.push(item);

   insertHistoricItem(item);
}

function insertHistoricItem(item) {
  let div = document.createElement('div'); // is a node
  div.innerHTML = `<div class='item'> ${item.fieldOne} ${item.operationSimble} ${item.fieldTwo} = ${Math.round(item.operator *100)/100}</div>`;
  document.querySelector('.historical-result').appendChild(div);
}

function deleteHistoric() {
 document.querySelector('.result').innerHTML = '';
 document.querySelector('.historical-result').innerHTML = '';
}
