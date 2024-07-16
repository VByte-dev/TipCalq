let tppAmount = () => {
  let amount = document.querySelector('#amount');
  let tip = document.querySelector('#tip');
  let person = document.querySelector('#person');

  let amountV = Number(amount.value);
  let tipV = Number(tip.value);
  let personV = Number(person.value);

  let tipAmount = ((tipV / 100) * amountV) / personV;
  // Display the calculated tip amount
  document.querySelector('#cardTotal').innerHTML = `${tipAmount.toFixed(2)}₹ Per Person`;

  return tipAmount;
};

// Adding event listeners to trigger tppAmount on input changes
document.querySelector('#amount').addEventListener('input', tppAmount);
document.querySelector('#tip').addEventListener('input', tppAmount);
document.querySelector('#person').addEventListener('input', tppAmount);
