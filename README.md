# 📝 To-Do List App (JavaScript)

This is my **first JavaScript project** — a simple **To-Do List App**. It includes basic functionality such as adding, removing, and displaying tasks. It's built using ES6 class syntax and organized into two JavaScript files: one for the class definition and one for the main application logic.

## Features

* Add new tasks
* Remove existing tasks
* Display all tasks
* Simple and clear class structure

## Project Structure

```
todolist/
├── taskManager.js    # Contains the TaskManager class
└── main.js           # Main function to run and test the app
```

## How It Works

### `taskManager.js`

Defines a `TaskManager` class with:

* **Constructor** – Initializes the task list
* **addTask(task)** – Adds a task to the list
* **removeTask(index)** – Removes a task by index
* **displayTasks()** – Displays all tasks in the console

### `main.js`

* Creates an instance of `TaskManager`
* Calls class methods to demonstrate functionality
