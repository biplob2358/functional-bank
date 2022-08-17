document.getElementById("deposite-btn").addEventListener("click", function () {
  const newDeposite = getInputFieldValueById("deposite-field");
  const previousDeposite = getTextElementById("deposite-total");

  if (isNaN(newDeposite)) {
    alert("Enter Valid Amount");
    return;
  }

  const currentDepositeTotal = previousDeposite + newDeposite;
  setUpdateElementValue("deposite-total", currentDepositeTotal);

  //balance
  const previousBalanceTotal = getTextElementById("balance-total");
  const currentBalanceTotal = previousBalanceTotal + newDeposite;
  setUpdateElementValue("balance-total", currentBalanceTotal);
});
