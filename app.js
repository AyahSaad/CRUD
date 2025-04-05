document.addEventListener("DOMContentLoaded", loadData);

function addData() {
  const input = document.getElementById("dataInput").value;
  if (input) {
    // Get current data from localStorage or create an empty array if no data exists
    const storedData = JSON.parse(localStorage.getItem("data")) || [];
    storedData.push(input);
    localStorage.setItem("data", JSON.stringify(storedData));
    document.getElementById("dataInput").value = "";
    loadData();
  }
}

function loadData() {
  const storedData = JSON.parse(localStorage.getItem("data")) || [];
  const dataList = document.getElementById("dataList");
  dataList.innerHTML = "";
  storedData.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    dataList.appendChild(listItem);
  });
}
