// Tab Switching Controller Mechanism
function openActivity(evt, activityId) {
    const tabcontents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-content");
    }
    const tabbtns = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabbtns.length; i++) {
        tabbtns[i].classList.remove("active");
    }
    document.getElementById(activityId).classList.add("active-content");
    evt.currentTarget.classList.add("active");
}

// Activity 1: Age Categorization 
function runActivity1() {
    const age = parseInt(document.getElementById('act1-age').value);
    const out = document.getElementById('act1-out');
    if (isNaN(age)) { out.innerText = "Please input a valid age integer."; return; }
    
    let category = "";
    if (age >= 0 && age <= 1) category = "Infant";
    else if (age >= 2 && age <= 4) category = "Toddler";
    else if (age >= 5 && age <= 12) category = "Child";
    else if (age >= 13 && age <= 19) category = "Teenager";
    else if (age >= 20 && age <= 39) category = "Adult";
    else if (age >= 40 && age <= 59) category = "Middle-Aged Adult";
    else if (age >= 60) category = "Senior Citizen";
    else category = "Invalid Age Selection";

    out.innerText = `Computed Category Output: ${category}`;
}

// Activity 2: Scripts Demonstration
function runActivity2() {
    const message = "External Script File successfully called and loaded!";
    alert(message);
    document.getElementById('act2-out').innerText = `Alert window executed with message string: "${message}"`;
}

// Activity 3: Object Schema Analyzer
function runActivity3() {
    const carObject = { type: "Fiat", model: "500", color: "white" };
    const outputString = `Object Profile Analyzed:\nCar Type: ${carObject.type}\nCar Model: ${carObject.model}\nCar Paint Color: ${carObject.color}`;
    document.getElementById('act3-out').innerText = outputString;
    console.log(carObject);
}

// Activity 4: String Variable Aggregation
function runActivity4() {
    const text1 = "Good";
    const text2 = "Evening";
    const aggregated = text1 + " " + text2;
    document.getElementById('act4-out').innerText = `Concatenated Global String Value: "${aggregated}"\nCheck browser console system log to verify mirror trace output.`;
    console.log("Activity 4 Target Combined Stream:", aggregated);
}

// Activity 5: Algebraic Math Computations
function runActivity5() {
    const n1 = parseFloat(document.getElementById('act5-num1').value);
    const n2 = parseFloat(document.getElementById('act5-num2').value);
    const out = document.getElementById('act5-out');
    if (isNaN(n1) || isNaN(n2)) { out.innerText = "Input both values completely."; return; }

    out.innerText = `Addition System Results (+): ${n1 + n2}\n` +
                    `Subtraction System Results (-): ${n1 - n2}\n` +
                    `Multiplication System Results (*): ${n1 * n2}\n` +
                    `Division System Results (/): ${(n2 !== 0 ? n1 / n2 : 'Undefined (Cannot divide by 0)')}`;
}

// Activity 6: Compound Assignment Operations
function runActivity6() {
    let base = parseFloat(document.getElementById('act6-base').value);
    const out = document.getElementById('act6-out');
    if (isNaN(base)) { out.innerText = "Set an initial starting baseline integer value."; return; }

    let log = `Initial Assignment Value: x = ${base}\n`;
    base += 5;  log += `Addition Assignment Execution (x += 5): New Value = ${base}\n`;
    base -= 3;  log += `Subtraction Assignment Execution (x -= 3): New Value = ${base}\n`;
    base *= 2;  log += `Multiplication Assignment Execution (x *= 2): New Value = ${base}\n`;
    base /= 4;  log += `Division Assignment Execution (x /= 4): New Value = ${base}`;
    
    out.innerText = log;
}

// Activity 7: Logic Gate Formulations
function runActivity7() {
    const expression1 = (10 > 5) && (3 < 8);  // True AND True -> True
    const expression2 = (5 > 12) || (4 === 4); // False OR True -> True
    const expression3 = !(10 === 10);          // NOT True -> False

    const log = `Evaluated Expression Traces:\n` +
                `Expression (10 > 5) && (3 < 8) Evaluates To: ${expression1}\n` +
                `Expression (5 > 12) || (4 === 4) Evaluates To: ${expression2}\n` +
                `Expression !(10 === 10) Evaluates To: ${expression3}`;
    document.getElementById('act7-out').innerText = log;
}

// Activity 8: Direct Relational Comparison Operators
function runActivity8() {
    const x = parseInt(document.getElementById('act8-x').value);
    const y = parseInt(document.getElementById('act8-y').value);
    const out = document.getElementById('act8-out');
    if (isNaN(x) || isNaN(y)) { out.innerText = "Provide both conditional comparative values."; return; }

    out.innerText = `Is X strictly greater than Y? (x > y): ${x > y}\n` +
                    `Is X less than or equal to Y? (x <= y): ${x <= y}\n` +
                    `Is X exactly equal in value to Y? (x == y): ${x == y}\n` +
                    `Is X completely mismatched to Y? (x != y): ${x != y}`;
}