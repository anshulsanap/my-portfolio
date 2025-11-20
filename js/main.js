// --- MODULE 5: SHOW EMAIL BUTTON ---
const contactButton = document.getElementById("contact-btn");
const emailDisplay = document.getElementById("email-display");

contactButton.addEventListener("click", function() {
    // Replace this with your actual Texas Tech email
    emailDisplay.textContent = "my.name@ttu.edu"; 
    contactButton.textContent = "Email Displayed!";
});

// --- MODULE 6: TOGGLE INTERESTS BUTTON ---
const toggleButton = document.getElementById("toggle-btn");
const interestsList = document.getElementById("interests-list");

toggleButton.addEventListener("click", function() {
    // This adds or removes the 'hidden' class defined in CSS
    interestsList.classList.toggle("hidden");
    
    // Optional: Change button text based on state
    if (interestsList.classList.contains("hidden")) {
        toggleButton.textContent = "Show My Interests";
    } else {
        toggleButton.textContent = "Hide My Interests";
    }
});

// --- MODULE 7: HIGHLIGHT ABOUT ME BUTTON ---
const highlightButton = document.getElementById("highlight-btn");
const aboutSection = document.getElementById("about-section");

highlightButton.addEventListener("click", function() {
    // This adds or removes the 'highlight' class defined in CSS
    aboutSection.classList.toggle("highlight");
});