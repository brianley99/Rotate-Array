
// Controller
function handleUserInput() {

    // Get inputs from the DOM
    let stepsAmount = document.getElementById('steps-Input').value;
    let userInput = document.getElementById('user-Input').value;

    // Format inputs
    stepsAmount = parseInt(stepsAmount);
    let userInputArray = userInput.split(',');

    // Validate Steps Amount
    if (Number.isNaN(stepsAmount)) {
        // Display error for invalid steps amount
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Invalid steps amount. Please enter an integer.`,
        });
        return;
    } else if (stepsAmount < 0 || stepsAmount > 15) {
        // Display error for steps amount out of range
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Invalid steps amount. Please enter a valid number between 0 and 15.`,
        });
        return;
    }

    // Validate User Input Array
    if (userInputArray.length > 100) {
        // Display error for exceeding maximum input length
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Invalid user input. Please enter a comma-separated list with a maximum of 100 elements.`,
        });
        return;
    } else if (userInputArray.length == 0) {
        // Display error for empty user input array
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Invalid user input. Make sure to separate each element using commas.`,
        });
        return;
    }

    // Rotate Array
    let rotatedArray = rotateArrayElements(userInputArray, stepsAmount);

    // Display result
    displayResults(rotatedArray, stepsAmount);
}

// Logic
function rotateArrayElements(inputArray, steps) {

    // Empty array to store results
    let resultArray = [];

    // Format steps to be within range of the length of the array
    while (steps >= inputArray.length) {

        steps -= inputArray.length;
    }

    // Add each element to the new array at the new index
    for (let i = steps; i < (inputArray.length + steps); i++) {

        if (i < inputArray.length) {

            // Index within range
            const element = inputArray[i];
            resultArray.push(element);

        } else {

            // Index out of range
            const element = inputArray[i - inputArray.length];
            resultArray.push(element);
        }
    }

    // Return result
    return resultArray;
}

// View
function displayResults(rotatedArray, steps) {

    // Format as HTML
    let results = `<span class="text-muted">Rotated by ${steps} steps</span><br>
                   <h1 class="text-muted">[<span class="text-primary fs-2">${rotatedArray}</span> ]</h1>`;

    // Display to DOM
    document.getElementById('results').innerHTML = results;
    document.getElementById('resultsContainer').classList.remove('d-none');;
}