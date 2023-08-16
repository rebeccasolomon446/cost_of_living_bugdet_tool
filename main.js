function addInfoToTable(event) {
  // creating new <tr> and appending it to the last tag in the <table> tag
  const newRow = document.createElement("tr");
  // setting the inutted item and budget value to a variable
  const inputtedItem = document.getElementById("item").value;
  const inputtedBudget = document.getElementById("budget-num").value;
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

const form = document.getElementById("form-button");
form.addEventListener("click", addInfoToTable);
