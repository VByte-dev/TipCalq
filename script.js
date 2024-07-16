let tppAmount = () => {
  let amount = document.querySelector('#amount');
  let tip = document.querySelector('#tip');
  let person = document.querySelector('#person');

  let amountV = Number(amount.value);
  let tipV = Number(tip.value);
  let personV = Number(person.value);
  
  console.log(personV);

  if (personV === 0) {
    document.querySelector('#cardTotal').innerHTML = `Number of people cannot be zero.`;
    return 0; 
  }

  let tipAmount = ((tipV / 100) * amountV) / personV;

  document.querySelector('#cardTotal').innerHTML = `${tipAmount.toFixed(2)}₹ Per Person`;

  return tipAmount;
};


document.querySelector('#amount').addEventListener('input', tppAmount);
document.querySelector('#tip').addEventListener('input', tppAmount);
document.querySelector('#person').addEventListener('input', tppAmount);
