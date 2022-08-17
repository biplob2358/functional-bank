document.getElementById("withdraw-btn").addEventListener("click", function () {
  const newWithdraw = getInputFieldValueById("withdraw-field");
  const previousWithdrawTotal = getTextElementById("withdraw-total");

  const previousBalanceTotal = getTextElementById("balance-total");

  if (isNaN(newWithdraw)) {
    alert("Enter Valid Amount");
    return;
  }

  if (previousBalanceTotal < newWithdraw) {
    alert("Insuffecent Balance");

    return;
  }

  const currentWithdrawTotal = previousWithdrawTotal + newWithdraw;
  setUpdateElementValue("withdraw-total", currentWithdrawTotal);

  const currentBalanceTotal = previousBalanceTotal - newWithdraw;
  setUpdateElementValue("balance-total", currentBalanceTotal);
});
