const formEl = document.getElementById("form-section");
const tbodyEl = document.querySelector("tbody");

const tableEl = document.querySelector("table");

const budget = document.getElementById("monthly-budget");
const grossBudget = document.getElementById("gross-budget");
// function to add user input to table
function submitForm(e) {
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
  formEl.reset; //resets the form so no text in input box after each submit
}

// function to delete row
function deleteRow(e) {
  if(!e.target.classList.contains("delete-btn")){
    return;
  }
  const btn = e.target;
  const finalBudget = document.getElementById("gross-budget");
  let row = btn.closest("tr");
  let cell = row.querySelector("td:nth-child(2)");
  let cellData = cell.textContent;
  sum -= cellData;
  // to subtract the dudget from the total when row is deleted
  finalBudget.innerHTML = `Total Budgeted : ${sum}`;
  btn.closest("tr").remove(); 
}

// function to update budget value
let sum = 0;
function updateBudget() {
  const inputBudget = document.getElementById("budget-num").value;
  const finalBudget = document.getElementById("gross-budget");
  sum += Number(inputBudget);
  finalBudget.innerHTML = `Total Budgeted : ${sum}`;
  console.log("hi");
}

// function to set total monthly budget
totalSum = 0;
function setTotalBudget() {
  const total = document.getElementById("total-monthly-budget").value;
  const pageTotal = document.getElementById("total-budget");
  // remove total monthly budget input 
  const input = document.getElementById("one-time-input");
  totalSum += Number(total);
  pageTotal.innerHTML = `This month's income : ${totalSum}`;
  input.remove();
}

formEl.addEventListener("submit", submitForm);
formEl.addEventListener("submit", updateBudget);
formEl.addEventListener("submit", setTotalBudget);
tableEl.addEventListener("click", deleteRow);