function clearInput() {
    forms.answer.value = '';
}

function deleteLastCharacter() {
    forms.answer.value = forms.answer.value.substr(0, forms.answer.value.length - 1);
}

function appendToInput(value) {
    forms.answer.value += value;
}

function calculateResult() {
    try {
        // Evaluate the expression and update the input field
        forms.answer.value = eval(forms.answer.value);
    } catch (error) {
        // If there's an error, display 'Error' in the input field
        forms.answer.value = 'Error';
    }
}

function toggleSign() {
    if (forms.answer.value) {
        // Check if the first character is a '-' sign
        if (forms.answer.value.charAt(0) === '-') {
            // Remove the '-' sign
            forms.answer.value = forms.answer.value.substring(1);
        } else {
            // Add a '-' sign at the beginning
            forms.answer.value = '-' + forms.answer.value;
        }
    }
}

function calculateSquareRoot() {
    if (forms.answer.value) {
        const value = parseFloat(forms.answer.value);
        if (value < 0) {
            forms.answer.value = 'Error'; // Handle negative input for square root
        } else {
            forms.answer.value = Math.sqrt(value);
        }
    }
}