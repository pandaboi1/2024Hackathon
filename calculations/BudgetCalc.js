function getInputValue() {
    let inputValue = document.getElementById("numberInput").value;
    return parseFloat(inputValue);  // Convert to number
}

// Function to calculate and display the square of the input
function Needs(number) {
    let result = number * 0.50;
    document.getElementById("nresult").innerText = result.toFixed(2);
}

// Function to calculate and display the cube of the input
function Wants(number) {
    let result = number * 0.30;
    document.getElementById("wresult").innerText = result.toFixed(2);
}

// Function to calculate and display the double of the input
function Savings(number) {
    let result = number * 0.20;
    document.getElementById("sresult").innerText = result.toFixed(2);
}

// Function to perform all calculations and display results at once
function calculateAll() {
    let number = getInputValue();  // Get input value once

    // Perform all calculations
    Needs(number);
    Wants(number);
    Savings(number);
}


