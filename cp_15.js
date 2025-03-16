//TASK 1

let riskDashboard = document.getElementById("riskDashboard"); // selects the risk dashboard container

console.log("Risk Dashboard Loaded");

//TASK 2, 3, 4, 6

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

    if (riskLevel === "Low") { // applies green background for low risk
        riskCard.style.backgroundColor = "green"; 
    } else if (riskLevel === "Medium") { // applies yellow background for medium risk
        riskCard.style.backgroundColor = "yellow"; 
    } else if (riskLevel === "High") { // applies red background for high risk
        riskCard.style.backgroundColor = "red"; 
    }

    let resolveButton = document.createElement("button"); // creates the resolve button
    resolveButton.textContent = "Resolve"; 
    resolveButton.onclick = function () {
        riskDashboard.removeChild(riskCard); // removes the risk card when clicked
    };
    riskCard.appendChild(resolveButton); // appends the resolve button to the card

    riskCard.onclick = function (event) { // stops event propagation for the card click
        event.stopPropagation(); // stops the event from bubbling up
    };

    riskDashboard.appendChild(riskCard); // appends the risk card to the dashboard 
}

// Test Case TASK 2

addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");

// Test Case TASK 3

addRiskItem("Market Fluctuations", "High", "Finance");
// Clicking "Resolve" should remove this risk from the dashboard.

// Test Case TASK 4

addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");

//TASK 5

let increaseRiskBtn = document.createElement("button"); // creates the button to increase risk levels
increaseRiskBtn.textContent = "Increase Risk Levels"; 
increaseRiskBtn.onclick = function () {
    let riskCards = document.querySelectorAll(".riskCard"); // selects all risk cards
    riskCards.forEach(function (card) { 
        let levelElement = card.querySelector("p"); // selects the risk level element
        if (levelElement.textContent.includes("Low")) { // changes Low to Medium
            levelElement.textContent = "Risk Level: Medium"; 
            card.style.backgroundColor = "yellow"; // updates color to yellow
        } else if (levelElement.textContent.includes("Medium")) { // changes medium to high
            levelElement.textContent = "Risk Level: High"; 
            card.style.backgroundColor = "red"; // updates color to red
        }
    });
};
document.body.appendChild(increaseRiskBtn); // appends the increase risk button to the body

// Test Case TASK 5

addRiskItem("Employee Retention", "Low", "HR"); // adds a low risk card for Employee Retention
