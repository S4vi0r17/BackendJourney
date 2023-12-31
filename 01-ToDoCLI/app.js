import {createInterface} from 'readline';
import chalk from 'chalk';

const tasks = [];

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

function displayMenu() {
    console.log(chalk.yellow.bold('¡Bienvenido a ToDo CLI!'));
    console.log(chalk.yellowBright('-----------------------'));
    console.log(chalk.magenta('1. Agregar una tarea'));
    console.log(chalk.cyan('2. Listar tareas'));
    console.log(chalk.green('3. Completar una tarea'));
    console.log(chalk.red('4. Eliminar una tarea'));
    console.log(chalk.gray('5. Salir'));
}

displayMenu();