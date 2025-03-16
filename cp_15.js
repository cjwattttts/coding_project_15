//TASK 1

let riskDashboard = document.getElementById("riskDashboard"); // selects the risk dashboard container

console.log("Risk Dashboard Loaded");

//TASK 2

function addRiskItem(riskName, riskLevel, department) { // function to add risk items to the dashboard
    let riskCard = document.createElement("div"); // creates a new div for the risk card
    riskCard.classList.add("riskCard"); // adds the riskCard class to the div

    let nameElement = document.createElement("h3"); // creates and appends the risk name element
    nameElement.textContent = riskName; 
    riskCard.appendChild(nameElement);

    let levelElement = document.createElement("p"); // creates and appends the risk level element
    levelElement.textContent = "Risk Level: " + riskLevel; 
    riskCard.appendChild(levelElement);

    let departmentElement = document.createElement("p"); // creates and appends the department element
    departmentElement.textContent = "Department: " + department; 
    riskCard.appendChild(departmentElement);

    riskDashboard.appendChild(riskCard); // appends the risk card to the dashboard 
}

// Test Case
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");