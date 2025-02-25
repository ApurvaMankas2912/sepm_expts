document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task-input');
    const addButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
  
    // Add Task
    addButton.addEventListener('click', function () {
      if (taskInput.value.trim() === "") {
        return; // Do nothing if input is empty
      }
  
      const taskText = taskInput.value.trim();
      const taskItem = document.createElement('li');
  
      // Create a task div
      taskItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn">Delete</button>
      `;
  
      // Add event listener to mark task as completed
      taskItem.querySelector('.task-text').addEventListener('click', function () {
        taskItem.classList.toggle('completed');
      });
  
      // Add event listener to delete task
      taskItem.querySelector('.delete-btn').addEventListener('click', function () {
        taskItem.remove();
      });
  
      // Add task to the list
      taskList.appendChild(taskItem);
  
      // Clear input
      taskInput.value = '';
    });
  
    // Optionally, allow pressing Enter to add a task
    taskInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        addButton.click();
      }
    });
  });
  