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

// Act 1: Text Editor - Browser - DevTools Alert Setup
function runActivity1() {
    alert("Activity 1 Initialized: Welcome message validation complete.");
    document.getElementById('act1-out').innerText = "System Alert processing successfully bypassed into browser frame context routing logs.";
}

// Act 2: document.getElementById("") Content Mutation
function runActivity2() {
    document.getElementById("act2-target").innerHTML = "Hello World! Target element node caught and updated via JavaScript core API selectors.";
}

// Act 3: External Script Execution Verification Framework
function runActivity3() {
    document.getElementById('act3-out').innerText = "Confirmed: Runtime assets loaded and managed smoothly inside external modular workspace boundary frameworks.";
}

// Act 4: Storage Allocations, Local Instantiations, and Variable Tracing
function runActivity4() {
    var x = 5;
    var y = 6;
    var z = x + y;
    document.getElementById('act4-out').innerText = `Calculated System Values:\nValue X: ${x}\nValue Y: ${y}\nComputed Sum Total (Z = X + Y): ${z}`;
}

// Act 5: Global Memory Hoisting and Runtime Bindings
function runActivity5() {
    var x; 
    x = 5; 
    var elem = document.getElementById("act5-demo"); 
    elem.innerHTML = "Bound Stack Registry Content Result: " + x;
}

// Act 6: Window Alert Stream Delivery Control
function runActivity6() {
    window.alert("Hello World");
}

// Act 7: Inline Document Buffering Math Calculations
function runActivity7() {
    var resultSum = 5 + 6;
    document.getElementById('act7-out').innerText = "Calculated Equation Trace Processing (5 + 6):\nRendered Stream Evaluated Output = " + resultSum;
}

// Act 8: Node Evaluation Auditing Comparison APIs
function getInnerText() {
    alert(document.getElementById("act8-example").innerText);
}

function getInnerHTML() {
    alert(document.getElementById("act8-example").innerHTML);
}

function getTextContent() {
    alert(document.getElementById("act8-example").textContent);
}