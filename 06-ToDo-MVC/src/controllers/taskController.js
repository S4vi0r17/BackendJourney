// import { Router } from 'express'

// const router = Router();

let tasks = [
    {
        id: 1,
        name: 'Complete project proposal',
        done: false
    },
    {
        id: 2,
        name: 'Meeting with team',
        done: true
    },
    {
        id: 3,
        name: 'Prepare presentation',
        done: false
    },
    {
        id: 4,
        name: 'Review code changes',
        done: false
    },
    {
        id: 5,
        name: 'Update documentation',
        done: true
    }
];

const getAllTasks = (req, res) => {
    res.render('index', {
        title: 'Tasks List',
        tasks
    });
}

const getAddTaskForm = (req, res) => {
    res.render('add', {
        title: 'Add Task'
    });
}

const addTask = (req, res) => {
    let { name } = req.body;
    tasks = [...tasks, { id: tasks.length + 1, name, done: false }];
    res.redirect('/');
}

const getEditTaskForm = (req, res) => {
    let { id } = req.params;
    res.render('edit', {
        title: 'Edit Task',
        task: tasks.find(task => task.id == id)
    });
}

const editTask = (req, res) => {
    let { id } = req.params;
    let { name } = req.body;

    tasks = tasks.map(task => task.id == id ? { ...task, name } : task);
    res.redirect('/');

    // let id = parseInt(req.params.id);
    // let taskIndex = tasks.findIndex(task => task.id === id);

    // if (taskIndex === -1) {
    //     res.redirect("/");
    // } else {
    //     tasks[taskIndex].name = req.body.name;
    //     res.redirect("/");
    // }
}

const completeTask = (req, res) => {
    let { id } = req.params;
    tasks = tasks.map(task => task.id == id ? { ...task, done: true } : task);
    res.redirect('/');

    // let id = parseInt(req.params.id);
    // let task = tasks.find((task) => task.id === id);

    // if (task) {
    //     task.done = true;
    // }

    // res.redirect("/");
}

const uncompleteTask = (req, res) => {
    let { id } = req.params;
    tasks = tasks.map(task => task.id == id ? { ...task, done: false } : task);
    res.redirect('/');

    // let id = parseInt(req.params.id);
    // let task = tasks.find((task) => task.id === id);

    // if (task) {
    //     task.done = false;
    // }

    // res.redirect("/");
}

const deleteTask = (req, res) => {
    let { id } = req.params;
    tasks = tasks.filter(task => task.id != id);
    res.redirect('/');

    // let id = parseInt(req.params.id);
    // tasks = tasks.filter((task) => task.id !== id);
    // res.redirect("/");
}

export default {
    getAllTasks,
    getAddTaskForm,
    addTask,
    getEditTaskForm,
    editTask,
    completeTask,
    uncompleteTask,
    deleteTask
}