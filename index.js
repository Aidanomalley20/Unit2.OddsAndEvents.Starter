let numberBank = [];
let oddNumbers = [];
let evenNumbers = [];

document.getElementById("addNumberBtn").addEventListener("click", () => {
  const inputField = document.getElementById("numberInput");
  const inputValue = inputField.value;

  const number = parseInt(inputValue);

  if (!isNaN(number)) {
    numberBank.push(number);
    console.log("Added number:", number);
    updateNumberBankDisplay();
  } else {
    console.log("Invalid input (not a number):", inputValue);
  }

  inputField.value = "";
});

function updateNumberBankDisplay() {
  const numberBankOutput = document.getElementById("numberBankOutput");

  if (numberBankOutput && numberBank.length > 0) {
    numberBankOutput.innerHTML = numberBank.join(", ");
    console.log("Updated number bank display");
  } else {
    numberBankOutput.innerHTML = "No numbers yet";
  }
}

document.getElementById("sortOneBtn").addEventListener("click", () => {
  if (numberBank.length > 0) {
    const number = numberBank.shift();

    if (number % 2 === 0) {
      evenNumbers.push(number);
    } else {
      oddNumbers.push(number);
    }
    updateNumberBankDisplay();
    updateSortedDisplay();
  }
});

document.getElementById("sortAllBtn").addEventListener("click", () => {
  while (numberBank.length > 0) {
    const number = numberBank.shift();

    if (number % 2 === 0) {
      evenNumbers.push(number);
    } else {
      oddNumbers.push(number);
    }
  }
  updateNumberBankDisplay();
  updateSortedDisplay();
});

function updateSortedDisplay() {
  const oddOutput = document.getElementById("oddNumbersOutput");
  const evenOutput = document.getElementById("evenNumbersOutput");

  oddOutput.innerHTML = oddNumbers.join(", ");
  evenOutput.innerHTML = evenNumbers.join(", ");

  console.log("Odd numbers:", oddNumbers);
  console.log("Even numbers:", evenNumbers);
}
