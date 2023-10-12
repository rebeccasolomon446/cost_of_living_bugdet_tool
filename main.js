const formEl = document.querySelector("form");
const tbodyEl = document.querySelector("tbody");

const tableEl = document.querySelector("table");

const budget = document.getElementById("monthly-budget");
const grossBudget = document.getElementById("gross-budget");
// function to add user input to table
function addInfoToTable(e) {
  e.preventDefault();
  const item = document.getElementById("item").value;
  const budgetVal = document.getElementById("budget-num").value;
  tbodyEl.innerHTML += `
  <tr>
      <td>${item}</td>
      <td>${budgetVal}</td>
      <td><button class="delete-btn">Delete</button></td>
  </tr>
  `
}

// function to delete row
function deleteRow(e) {
  if(!e.target.classList.contains("delete-btn")){
    return;
  }
  const btn = e.target;
  btn.closest("tr").remove(); 
}

// function to update budget value
function updateBudget() {
  let sum = 0;
  const userTotalBudget = document.getElementById("total-budget").value;
  
  const inputBudget = document.getElementById("budget-num").value;
  const finalBudget = document.getElementById("gross-budget");
  // after final budget value is inputted once, it is removed from the form??

  sum += Number(inputBudget);
  finalBudget.innerHTML = `Remaining Budget : ${userTotalBudget - sum}`
}

formEl.addEventListener("submit", addInfoToTable);
formEl.addEventListener("submit", updateBudget);
tableEl.addEventListener("click", deleteRow);