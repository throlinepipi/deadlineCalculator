// script.js

// Get the required elements from the DOM
const taskNameInput = document.getElementById('task-name');
const hoursRequiredInput = document.getElementById('hours-required');
const deadlineDateInput = document.getElementById('deadline-date');
const scheduleInput = document.getElementById('schedule-input');
const calculateBtn = document.getElementById('calculate-btn');
const hoursPerDayResult = document.getElementById('hours-per-day');

// Add event listener to the Calculate button
calculateBtn.addEventListener('click', calculateHoursPerDay);

// Function to calculate the hours per day
function calculateHoursPerDay() {
    // Get the values from the input fields
    const taskName = taskNameInput.value;
    const hoursRequired = parseInt(hoursRequiredInput.value);
    const deadlineDate = new Date(deadlineDateInput.value);
    const schedule = scheduleInput.value;

    // Calculate the number of days left until the deadline
    const today = new Date();
    const daysLeft = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));

    // Calculate the hours per day required to complete the task
    const hoursPerDay = Math.ceil(hoursRequired / daysLeft);

    // Display the result
    hoursPerDayResult.textContent = `To complete the task "${taskName}" by ${deadlineDate.toDateString()}, allocate approximately ${hoursPerDay} hours per day.`;
}
