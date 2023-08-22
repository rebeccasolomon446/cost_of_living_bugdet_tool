

function addInfoToTable(event) {
  // creating new <tr> and appending it to the last tag in the <table> tag
  const newRow = document.createElement("tr");
  // setting the inutted item and budget value to a variable
  let inputtedItem = document.getElementById("item").value;
  let inputtedBudget = document.getElementById("budget-num").value;
  // giving the new <tr> tag an id name that includes the inputted value to make each <tr> unique to each input
  newRow.setAttribute("id", `input-${inputtedItem}`);
  // add the users inut to the table
  document.getElementById("table").appendChild(newRow);
  // creating a new <td> tag
  const newItemRow = document.createElement("td");
  const newBudgetRow = document.createElement("td");
  // setting the <td> tag to the inputted user item and budget value
  newItemRow.innerText = `${inputtedItem}`;
  newBudgetRow.innerText = `${inputtedBudget}`;
  // adding the new item and budget value to the <tr> tag in the table
  document.getElementById(`input-${inputtedItem}`).appendChild(newItemRow);
  document.getElementById(`input-${inputtedItem}`).appendChild(newBudgetRow);
  // prevents glitch
  event.preventDefault();
}

let sum = 0;
function incrementBudgetTotal() {
  let inputtedBudget = document.getElementById("budget-num");
  let num = Number(inputtedBudget.value)
  sum += num;
  document.getElementById("budget-total").innerHTML = `Total: ${sum}`;
}

const form = document.getElementById("form-button");
form.addEventListener("click", addInfoToTable);
form.addEventListener("click", incrementBudgetTotal);
