const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// In-memory storage for todos
let todos = [];
let currentId = 1;

// Create a new todo
app.post('/todos', (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).send('Title and description are required.');
    }
    const newTodo = { id: currentId++, title, description };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// Read all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Read a single todo by id
app.get('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);
    if (!todo) {
        return res.status(404).send('Todo not found.');
    }
    res.json(todo);
});

// Update a todo by id
app.put('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, description } = req.body;
    const todo = todos.find(t => t.id === id);
    if (!todo) {
        return res.status(404).send('Todo not found.');
    }
    if (title) todo.title = title;
    if (description) todo.description = description;
    res.json(todo);
});

// Delete a todo by id
app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex(t => t.id === id);
    if (index === -1) {
        return res.status(404).send('Todo not found.');
    }
    const deletedTodo = todos.splice(index, 1);
    res.json(deletedTodo);
});

// Error handling for invalid routes
app.use((req, res) => {
    res.status(404).send('Route not found.');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});