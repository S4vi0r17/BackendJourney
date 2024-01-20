import { createInterface } from 'readline';
import clear from 'console-clear';
import chalk from 'chalk';

clear();

const tasks = [];

const rl = createInterface({
	input: process.stdin,
	output: process.stdout
});

function displayMenu() {
	console.log(chalk.yellow.bold('\nWelcome to ToDo CLI!'));
	console.log(chalk.yellowBright('--------------------'));
	console.log(chalk.green('1. Add a task'));
	console.log(chalk.magenta('2. List tasks'));
	console.log(chalk.cyan('3. Complete a task'));
	console.log(chalk.red('4. Delete a task'));
	console.log(chalk.gray('5. Exit'));
}

function chooseMenu() {

	rl.question('Choose an option: ', (answer) => {

		switch (answer) {
			case '1':
				addTask();
				break;
			case '2':
				listTasks();
				break;
			case '3':
				completeTask();
				break;
			case '4':
				deleteTask();
				break;
			case '5':
				console.log(chalk.yellow('Bye!'));
				rl.close();
				break;
			default:
				console.log(chalk.red('Invalid option!'));
				displayMenu();
				chooseMenu();
		}
	});
}

function addTask() {

	rl.question(chalk.bgGreenBright('Add a task: '), (answer) => {

		tasks.push({ name: answer, completed: false });
		console.log(chalk.green('Task added!'));

		displayMenu();
		chooseMenu();
	});
}

function listTasks() {

	console.log(chalk.bgMagenta('List of tasks:'));

	if (tasks.length === 0) {
		console.log(chalk.bgGreenBright('No tasks!'));
	} else {
		tasks.forEach((task, index) => {
			let statusColor = task.completed ? chalk.green : chalk.redBright;
			console.log(`${index + 1}. ${task.name} - ${statusColor(task.completed ? 'Completed' : 'Pending')}`);
		});
	}

	displayMenu();
	chooseMenu();
}

function completeTask() {

	rl.question(chalk.bgCyan('Complete a task: '), (answer) => {

		const index = parseInt(answer) - 1;

		if (index < 0 || index >= tasks.length) {
			console.log(chalk.red('Invalid task number!'));
		} else {
			tasks[index].completed = true;
			console.log(chalk.cyan('Task completed!'));
		}

		displayMenu();
		chooseMenu();
	});
}

function deleteTask() {

	if (tasks.length === 0) {
		console.log(chalk.bgGreenBright('No tasks to delete!'));
		displayMenu();
		chooseMenu();
		return;
	}

	rl.question(chalk.bgRed('Delete a task: '), (answer) => {

		const index = parseInt(answer) - 1;

		if (index < 0 || index >= tasks.length) {
			console.log(chalk.red('Invalid task number!'));
		} else {
			tasks.splice(index, 1);
			console.log(chalk.red('Task deleted!'));
		}

		displayMenu();
		chooseMenu();
	});
}

displayMenu();
chooseMenu();