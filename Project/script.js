// Define a variable to store the tasks
let tasks = [];

// Function to add a task
function addTask(taskName) {
    tasks.push(taskName);
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
}

// Function to display the tasks in the HTML
function displayTasks() {
    const taskList = document.querySelector('#task-list');
    taskList.innerHTML = ''; // Clear the list before showing the tasks again

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            deleteTask(index);
            displayTasks(); // Show updated tasks
        });

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    });
}

// Function to handle the form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the page from reloading when submitting the form
    const taskInput = document.querySelector('#task-input');
    const taskName = taskInput.value.trim(); // Get the value of the input and remove leading and trailing whitespace

    if (taskName !== '') {
        addTask(taskName);
        displayTasks();
        taskInput.value = ''; // Clear the input after adding the task
    } else {
        alert('Please enter a task name.'); // Display an alert if the task name is empty
    }
}

// Event listener for the 'submit' event of the form
const form = document.querySelector('#task-form');
form.addEventListener('submit', handleSubmit);

// Show tasks on page load
document.addEventListener('DOMContentLoaded', () => {
    displayTasks();
});
