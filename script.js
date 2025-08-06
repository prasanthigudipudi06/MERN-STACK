// === Basic JavaScript: Variables and Data Types ===
// Using an object to group related data for a user profile.
const userProfile = {
    name: "G.PRASANTHI",
    bio: "A passionate web developer who loves turning ideas into reality.",
    skills: ["JavaScript", "React", "Node.js", "HTML & CSS"],
    hobbies: ["Reading ", "cooking", "Playing"]
};

// === DOM Manipulation: Accessing and Updating Elements ===
// Displaying the user's name and bio from the userProfile object.
document.getElementById('profile-name').textContent = userProfile.name;
document.getElementById('profile-bio').textContent = userProfile.bio;

// === Loops: Dynamically Generating Content ===
// Function to populate a list in the HTML from an array.
function populateList(listId, items) {
    const listElement = document.getElementById(listId);
    listElement.innerHTML = ''; // Clear existing items
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listElement.appendChild(li);
    });
}

// Using the function to display skills and hobbies.
populateList('skills-list', userProfile.skills);
populateList('hobbies-list', userProfile.hobbies);

// === Functions & Events: Handling User Actions ===
// Function to toggle the visibility of an element.
function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    element.classList.toggle('hidden');
}

// Event listener for the 'Show More Info' button.
document.getElementById('toggle-info-btn').addEventListener('click', () => {
    toggleVisibility('more-info');
});

// === Asynchronous JavaScript: Using Fetch and Async/Await ===
// Function to fetch a random quote from an API.
async function fetchRandomQuote() {
    const quoteDisplay = document.getElementById('quote-display');
    const quoteAuthor = document.getElementById('quote-author');
    try {
        const response = await fetch('https://api.quotable.io/random');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        quoteDisplay.querySelector('p').textContent = `"${data.content}"`;
        quoteAuthor.textContent = data.author;
    } catch (error) {
        console.error("Could not fetch quote:", error);
        quoteDisplay.querySelector('p').textContent = "Could not load quote. Please try again later.";
        quoteAuthor.textContent = "System";
    }
}

// === BOM (Browser Object Model): Using setInterval ===
// Fetch a new quote immediately and then every 30 seconds.
fetchRandomQuote(); // Initial fetch
setInterval(fetchRandomQuote, 30000); // Fetch a new quote every 30 seconds

// === LocalStorage: Saving User Input ===
const feedbackForm = document.getElementById('feedback-form');
const feedbackInput = document.getElementById('feedback-input');
const storedFeedback = document.getElementById('stored-feedback');

// Function to handle form submission.
function handleFeedbackSubmit(event) {
    event.preventDefault(); // Prevent the form from reloading the page
    const feedback = feedbackInput.value;

    // BOM: Using alert() to notify the user.
    alert("Thank you for your feedback!");

    // Save the feedback to localStorage.
    localStorage.setItem('userFeedback', feedback);

    // Display the saved feedback.
    displayStoredFeedback();

    feedbackForm.reset(); // Clear the input field
}

// Function to display feedback from localStorage.
function displayStoredFeedback() {
    const savedFeedback = localStorage.getItem('userFeedback');
    if (savedFeedback) {
        storedFeedback.textContent = savedFeedback;
    } else {
        storedFeedback.textContent = "No feedback saved yet.";
    }
}

// Event listener for the feedback form submission.
feedbackForm.addEventListener('submit', handleFeedbackSubmit);

// Display any stored feedback when the page loads.
document.addEventListener('DOMContentLoaded', displayStoredFeedback);
