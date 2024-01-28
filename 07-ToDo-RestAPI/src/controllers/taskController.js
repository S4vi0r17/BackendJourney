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
    // res.render('index', {
    //     title: 'Tasks List',
    //     tasks
    // });
    res.json({ tasks });
}

const addTask = (req, res) => {
    let { name } = req.body;

    if (!name) {
        // res.status(400).json({ error: true, message: 'Task name is required' });
        res.json({ error: true, message: 'Task name is required' });
        return;
    }

    tasks = [...tasks, { id: tasks.length + 1, name, done: false }];
    res.json({ error: false, message: 'Task added successfully' });
}

const getTask = (req, res) => {
    let id = parseInt(req.params.id);
    let task = tasks.find(task => task.id == id);

    if (task) {
        res.json({ task });
    } else {
        res.status(404).json({ error: true, message: 'Task not found' });
    }
}

// const getTask = (req, res) => {
//     let id = parseInt(req.params.id);
//     let taskIndex = tasks.findIndex((task) => task.id === id);

//     if (taskIndex === -1) {
//         res.status(404).json({ err: true, message: "Tarea no encontrada" });
//     } else {
//         res.json({ task: tasks[taskIndex] });
//     }
// };

const editTask = (req, res) => {
    let { id } = req.params;
    let { name } = req.body;

    tasks = tasks.map(task => task.id == id ? { ...task, name } : task);
    // res.redirect('/');
    res.json({ error: false, message: 'Task updated successfully' });
}

const completeTask = (req, res) => {
    let id = parseInt(req.params.id);
    let task = tasks.find(task => task.id == id);

    if (task) {
        task.done = true;
        res.json({ error: false, message: 'Task completed successfully' });
    } else {
        res.status(404).json({ error: true, message: 'Task not found' });
    }
}

const uncompleteTask = (req, res) => {
    let id = parseInt(req.params.id);
    let task = tasks.find(task => task.id == id);

    if (task) {
        task.done = false;
        res.json({ error: false, message: 'Task uncompleted successfully' });
    } else {
        res.status(404).json({ error: true, message: 'Task not found' });
    }
}

const deleteTask = (req, res) => {
    let { id } = req.params;
    let taskIndex = tasks.findIndex(task => task.id == id);

    if (taskIndex === -1) {
        res.status(404).json({ error: true, message: 'Task not found' });
    } else {
        tasks.splice(taskIndex, 1); // Elimina el elemento del array
        res.json({ error: false, message: 'Task deleted successfully' });
    }
}

export default {
    getAllTasks,
    addTask,
    getTask,
    editTask,
    completeTask,
    uncompleteTask,
    deleteTask
}