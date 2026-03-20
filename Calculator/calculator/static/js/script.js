
/* JS: Handling the Logic */
const display = document.getElementById('display');

function appendToDisplay(input) {
    // Prevent multiple operators in a row
    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '*', '/'];
    if (operators.includes(input) && operators.includes(lastChar)) return;

    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // Check if display is empty to avoid errors
        if (display.value === "") return;

        // eval() calculates the string expression
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
        setTimeout(clearDisplay, 1500); // Clear error after 1.5s
    }
}

// Listen for keyboard input (Optional Pro Feature)
document.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) appendToDisplay(e.key);
    if (['+', '-', '*', '/'].includes(e.key)) appendToDisplay(e.key);
    if (e.key === 'Enter') calculate();
    if (e.key === 'Backspace') deleteLast();
    if (e.key === 'Escape') clearDisplay();
});
