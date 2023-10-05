const formEl = document.querySelector("form");
const tbodyEl = document.querySelector("tbody");

// function to add user input to table
function addInfoToTable(e) {
  e.preventDefault();
  const item = document.getElementById("item").value;
  const budgetVal = document.getElementById("budget-num").value;
  tbodyEl.innerHTML += `
  <tr>
      <td>${item}</td>
      <td>${budgetVal}</td>
      <td><button id="delete-btn">Delete</button></td>
  </tr>
  `
}

formEl.addEventListener("submit", addInfoToTable)