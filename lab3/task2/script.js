'use strict';

const form = document.getElementById('todo-form');
const taskInput = document.getElementById('new-task-input');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    
    const taskText = taskInput.value.trim();
    if (taskText == '') return;

    
    const listItem = document.createElement('li');
    listItem.classList.add('task-item');

    
    const leftContainer = document.createElement('div');
    leftContainer.classList.add('task-left');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const taskLabel = document.createElement('span');
    taskLabel.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '✖';
    deleteButton.classList.add('delete-btn');

    checkbox.addEventListener('change', () => {
        taskLabel.classList.toggle('task-done');
    });

    
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
    });

    
    leftContainer.appendChild(checkbox);
    leftContainer.appendChild(taskLabel);

    listItem.appendChild(leftContainer);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

   
    taskInput.value = '';
});