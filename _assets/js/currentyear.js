// Return today's date and time

document.addEventListener("DOMContentLoaded", function() {
    // This function runs after the DOM is fully loaded
    var currentTime = new Date();
    var year = currentTime.getFullYear();
    var currentYearElement = document.getElementById("currentYear");

    // Check if element exists before setting innerHTML
    if (currentYearElement) {
        currentYearElement.innerHTML = year;
    } else {
        console.error("Element with id 'currentYear' not found.");
    }
});
