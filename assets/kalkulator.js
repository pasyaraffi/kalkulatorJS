function appendToDisplay(value) {
  document.getElementById("result").value += value;
}

function clearDisplay() {
  document.getElementById("result").value = "";
}

function calculateResult() {
  let expression = document.getElementById("result").value;
  if (expression) {
      try {
          let result = eval(expression);
          document.getElementById("result").value = result;
          addToHistory(expression + " = " + result);
      } catch {
          document.getElementById("result").value = "Error";
      }
  }
}

function addToHistory(entry) {
  let historyList = document.getElementById("history-list");
  let listItem = document.createElement("li");
  listItem.textContent = entry;
  historyList.appendChild(listItem);
}

function clearHistory() {
  document.getElementById("history-list").innerHTML = "";
}

function toggleHistory() {
  let historyContainer = document.getElementById("history-container");
  historyContainer.classList.toggle("hidden");
}
