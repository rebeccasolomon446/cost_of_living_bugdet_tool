
function addInfoToTable(event) {
  const newRow = document.createElement("tr");   // creating new <tr> and appending it to the last tag in the <table> tag

  let inputtedItem = document.getElementById("item").value;   // setting the inutted item and budget value to a variable
  let inputtedBudget = document.getElementById("budget-num").value;   // giving the new <tr> tag an id name that includes the inputted value to make each <tr> unique to each input

  newRow.setAttribute("id", `input-${inputtedItem}`);   // add the users inut to the table

  document.getElementById("table").appendChild(newRow);   // creating a new <td> tag
  
  const newItemRow = document.createElement("td");
  const newBudgetRow = document.createElement("td");   // setting the <td> tag to the inputted user item and budget value

  newItemRow.innerText = inputtedItem;
  newBudgetRow.innerText = inputtedBudget;
 
  document.getElementById(`input-${inputtedItem}`).appendChild(newItemRow);  // adding the new item and budget value to the <tr> tag in the table
  document.getElementById(`input-${inputtedItem}`).appendChild(newBudgetRow);
  
  event.preventDefault(); // prevents glitch
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

// this function adds an event listener to each row of the table
// if statement is used to check whether the tag name clicked is <td> and within a <tr> tag
// its only then will the event listener return the id.
// without checking the parent element, clicking on the row will return 'undefined'

// when edit button is clicked, getRowId function triggered
//but currently function only works when row is clicked on
// need to find a way to get the ids of all rows in on the table, without a row needing to be clicked on

let rowId = "";
function getRowId() {
  document.addEventListener('click', function (event) {
    if (event.target.tagName === 'TD' && event.target.parentElement.tagName === 'TR') {
      rowId += event.target.parentElement.id;
      console.log(event.target.parentElement.id); 
    }
  });
}
document.addEventListener('DOMContentLoaded', getRowId);



// when row in table is clicked, row is deleted
function deleteRow() {
  rowId ? document.getElementById(rowId).remove() : null;
  console.log('second click');
}
table.addEventListener('click', deleteRow);


// edit button clicked
// instruction appears to prompt user to click on row they wish to delete
// will change the color of the row hovered on
// when user clicks on the row, it deletes

