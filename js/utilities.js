function getInputFieldValueById(inputId) {
  const inputElement = document.getElementById(inputId);
  const inputElementValueString = inputElement.value;
  const inputElementValue = parseFloat(inputElementValueString);
  inputElement.value = "";

  return inputElementValue;
}

function getTextElementById(textElementId) {
  const textElement = document.getElementById(textElementId);
  const textElementValuseString = textElement.innerText;
  const textElementValuse = parseFloat(textElementValuseString);

  return textElementValuse;
}

function setUpdateElementValue(elementId, newValue) {
  const previousTextElement = document.getElementById(elementId);
  previousTextElement.innerText = newValue;
}

//logout
document.getElementById("logout").addEventListener("click", function () {
  window.location.href = "index.html";
});
