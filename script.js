const parts = document.getElementById("content");
let comParts = [
    "CPU",
    "GPU",
    "RAM",
    "Motherboard",
    "Hard Drive",
    "SSD",
    "Power Supply",
    "Cooling Fan",
    "Monitor",
    "Keyboard"
];

// Function to display the array elements
function showArr() {
    parts.innerHTML = "<p>Computer Parts: " + comParts.toString() + "</p>";
}

// Show the joined parts
function showJoinedArr() {
    parts.innerHTML = "Joined Parts: " + comParts.join(", ");
}

// Delete the last part
function popArr() {
    comParts.pop();
    showArr();
}

// Concatenate additional parts
function concatArr() {
    let extraParts = ["Mouse", "Speakers"];
    comParts = comParts.concat(extraParts);
    showArr();
}
