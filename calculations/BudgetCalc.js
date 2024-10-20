function getInputValue() {
    let inputValue = document.getElementById("numberInput").value;
    return parseFloat(inputValue);  // Convert to number
}

// Function to calculate and display needs percentile of the input
function Needs(number) {
    let result = number * 0.50;
    document.getElementById("nresult").innerText = result.toFixed(2);
}

// Function to calculate and display wants percentile of the input
function Wants(number) {
    let result = number * 0.30;
    document.getElementById("wresult").innerText = result.toFixed(2);
}

// Function to calculate and display savings percentile of the input
function Savings(number) {
    let result = number * 0.20;
    document.getElementById("sresult").innerText = result.toFixed(2);
}

//Need Total box additions:
function NeedsTotal() {
    // Get values from the input fields
    let input1 = parseFloat(document.getElementById("numberInput1").value) || 0;
    let input2 = parseFloat(document.getElementById("numberInput2").value) || 0;
    let input3 = parseFloat(document.getElementById("numberInput3").value) || 0;
    let input4 = parseFloat(document.getElementById("numberInput4").value) || 0;

    // Add the values together
    let total1 = input1 + input2 + input3 + input4;

    // Display the total result in the HTML
    document.getElementById("ntresult").innerText = total1.toFixed(2);
}

function WantsTotal() {
    // Get values from the input fields
    let input1 = parseFloat(document.getElementById("numberInput5").value) || 0;
    let input2 = parseFloat(document.getElementById("numberInput6").value) || 0;
    let input3 = parseFloat(document.getElementById("numberInput7").value) || 0;

    // Add the values together
    let total2 = input1 + input2 + input3;

    // Display the total result in the HTML
    document.getElementById("wtresult").innerText = total2.toFixed(2);
}

function SavingsTotal() {
    // Get values from the input fields
    let input1 = parseFloat(document.getElementById("numberInput8").value) || 0;
    let input2 = parseFloat(document.getElementById("numberInput9").value) || 0;
    let input3 = parseFloat(document.getElementById("numberInput10").value) || 0;
    // Add the values together
    let total3 = input1 + input2 + input3;
    // Display the total result in the HTML
    document.getElementById("stresult").innerText = total3.toFixed(2);
}

// Function to perform all calculations and display results at once
function calculateAll() {
    let number = getInputValue();  // Get input value once
    // Perform all calculations
    Needs(number);
    Wants(number);
    Savings(number);

//So everything appears at the same time
    let number_n = NeedsTotal();  // Get input value once
    let number_w = WantsTotal();
    let number_s = SavingsTotal();
    // Perform all calculations
    NeedsTotal(number_n);
    WantsTotal(number_w);
    SavingsTotal(number_s);


    document.getElementById("btn1").addEventListener("click", function() {

    //Display if if-else statements
    //for needs
    if (number_n > Needs(number)) {
        document.getElementById("exceedsMessage").innerText = "It seems that your total execeeds the dedicated amount of spending. Lets see if we can make some adjustments!";
    } 
    else if(number_n < Needs(number)){
        document.getElementById("exceedsMessage").innerText = "Awesome, you're on the right track, your total should not exceed you dedicated amount!";
    }
    else {
        document.getElementById("exceedsMessage").innerText = "Oh no! It seems like something went wrong, Please enter only positive numbers.";  // Clear the message if not exceeding
    }


    //For wants
    if (number_n > Wants(number)) {
        document.getElementById("belowMessage").innerText = "It seems that your total execeeds the dedicated amount of spending. Lets see if we can make some adjustments!";
    } 
    else if(number_n < Wants(number)){
        document.getElementById("belowMessage").innerText = "Awesome, you're on the right track, your total should not exceed you dedicated amount!";
    }
    else {
        document.getElementById("belowMessage").innerText = "Oh no! It seems like something went wrong, Please enter only positive numbers.";  // Clear the message if not exceeding
    }

    //for savings
    if (number_n > Savings(number)) {
        document.getElementById("saveMessage").innerText = "It seems that your total execeeds the dedicated amount of spending. Lets see if we can make some adjustments!";
    } 
    else if(number_n < Savings(number)){
        document.getElementById("saveMessage").innerText = "Awesome, you're on the right track, your total should not exceed you dedicated amount!";
    }
    else {
        document.getElementById("saveMessage").innerText = "Oh no! It seems like something went wrong, Please enter only positive numbers.";  // Clear the message if not exceeding
    }
})
}





