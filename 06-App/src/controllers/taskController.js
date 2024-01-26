// import { Router } from 'express'

// const router = Router();

let tasks = [
    {
        id: 1,
        name: 'Complete project proposal',
        description: 'Draft and submit the project proposal for client review.',
        done: false
    },
    {
        id: 2,
        name: 'Meeting with team',
        description: 'Conduct a team meeting to discuss project progress and upcoming tasks.',
        done: true
    },
    {
        id: 3,
        name: 'Prepare presentation',
        description: 'Create a presentation for the upcoming client meeting.',
        done: false
    },
    {
        id: 4,
        name: 'Review code changes',
        description: 'Review and test the latest code changes from the development team.',
        done: false
    },
    {
        id: 5,
        name: 'Update documentation',
        description: 'Update project documentation with the latest changes and features.',
        done: true
    }
];

const getAllTasks = (req, res) => {
    res.render('index', {
        title: 'Tasks List',
        tasks
    });
}

const addTask = (req, res) => {

}

const getAddTaskForm = (req, res) => {

}

const getEditTaskForm = (req, res) => {

}

const editTask = (req, res) => {

}

const completeTask = (req, res) => {

}

const uncompleteTask = (req, res) => {

}

const deleteTask = (req, res) => {

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