// JavaScript Activity 2: DOM Manipulation and Conditional Logic
document.getElementById('submitBtn').addEventListener('click', function() {
    // 1. Get input values
    const name = document.getElementById('userName').value.trim();
    const age = parseInt(document.getElementById('userAge').value);
    
    // 2. Target output elements
    const outputBox = document.getElementById('outputBox');
    const greetingText = document.getElementById('greetingText');
    const statusText = document.getElementById('statusText');

    // 3. Validation Check
    if (name === "" || isNaN(age)) {
        alert("Please fill out both fields correctly!");
        return;
    }

    // 4. Process Logic & Display Output
    greetingText.innerText = `Hello, ${name}! Welcome to my JS Activity page.`;
    
    if (age >= 18) {
        statusText.innerText = `Status: You are ${age} years old. You are eligible to vote and drive.`;
        statusText.style.color = "#2ecc71"; // Green for adult
    } else {
        statusText.innerText = `Status: You are ${age} years old. You are still a minor.`;
        statusText.style.color = "#e74c3c"; // Red for minor
    }

    // Show the output box
    outputBox.classList.remove('hidden');
});