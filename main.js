const formEl = document.querySelector("form");
const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");
// function to add user input to table
function addInfoToTable(e) {
  e.preventDefault();
  const item = document.getElementById("item").value;
  const budgetVal = document.getElementById("budget-num").value;
  tbodyEl.innerHTML += `
  <tr>
      <td>${item}</td>
      <td>${budgetVal}</td>
      <td><button classList="delete-btn">Delete</button></td>
  </tr>
  `
}

// function to delete row
function deleteRow(e) {
  if(!e.target.classList.contains("delete-btn")){
    null;
    
  }
  const btn = e.target;
  btn.closest("tr").remove(); 
}

formEl.addEventListener("submit", addInfoToTable);
tableEl.addEventListener("click", deleteRow);