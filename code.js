// Function to play Craps
function playCraps() {
    const die1 = Math.floor(Math.random() * 6) + 1; // Generates a random number for die1
    const die2 = Math.floor(Math.random() * 6) + 1; // Generates a random number for die2
    const sum = die1 + die2; // Calculates the sum of two dice

    // Output the result of the roll
    document.getElementById('result').innerHTML = `You rolled ${die1} and ${die2}. Sum is ${sum}. `;

    // Determine the game outcome based on the sum and individual dice values
    if (sum === 7 || sum === 11) {
        document.getElementById('result').innerHTML += "CRAPS – you lose!";
    } else if (die1 === die2 && die1 % 2 === 0) {
        document.getElementById('result').innerHTML += "You won!";
    } else {
        document.getElementById('result').innerHTML += "You pushed!";
    }
}

// Additional function example
function exampleFunction(parameter) {
    // Uses input parameter to perform some action
    console.log(`The input value is ${parameter}`);
    // Outputs a result
    document.getElementById('result').innerHTML += ` Result of the function: ${parameter}`;
}
