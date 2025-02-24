const form = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', (e) => {
e.preventDefault();
    
const inputField = form.querySelector('input[type="text"]');
const todoText = inputField.value.trim();

if (todoText) {
const newTodoItem = document.createElement('li');
const newTodoButton = document.createElement('button');
        
newTodoButton.textContent = todoText;

newTodoButton.addEventListener('click', () => {
  if (newTodoButton.style.textDecoration === 'line-through') {
    newTodoItem.remove();
  } else {
    newTodoButton.style.textDecoration = 'line-through';
  }
});

newTodoItem.appendChild(newTodoButton);
todoList.appendChild(newTodoItem);

inputField.value = ''; //To clear the input field//
}
});