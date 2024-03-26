// Function to load tasks stored locally

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Limitar las tareas cargadas a los primeros cinco elementos
  const limitedTasks = tasks.slice(0, 5);

  limitedTasks.forEach(task => addTaskToList(task));
}
// Function to save tasks to local storage
function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to add a new task to the list
function addTaskToList(task) {
  const taskList = document.getElementById('task-list');
  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    <input type="checkbox" id="${task.id}" ${task.completed ? 'checked' : ''}>
    <label for="${task.id}">${task.title}</label>
    <span class="description">${task.description}</span>
  `;
  if (task.completed) {
    taskItem.classList.add('completed');
  }
  taskList.appendChild(taskItem);
}

// Function to add a new task
function addTask(title, description) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const newTask = {
    id: Date.now(),
    title,
    description,
    completed: false
  };
  tasks.push(newTask);
  saveTasks(tasks);
  addTaskToList(newTask);
}

// Function to toggle task completion
function toggleTaskCompletion(taskId) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const index = tasks.findIndex(task => task.id === taskId);
  if (index !== -1) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks(tasks);
    const taskItem = document.getElementById(taskId);
    taskItem.parentNode.classList.toggle('completed');
  }
}

// Main function when the page loads
window.onload = function() {
  loadTasks();

  // Add event to mark tasks as completed
  document.getElementById('task-list').addEventListener('change', event => {
    if (event.target.type === 'checkbox') {
      toggleTaskCompletion(parseInt(event.target.id));
    }
  });

  // Add event to add a new task
  document.getElementById('add-task-form').addEventListener('submit', event => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    addTask(title, description);
    document.getElementById('add-task-form').reset();
  });
};
