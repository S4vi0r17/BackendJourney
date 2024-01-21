import axios from 'axios';
import chalk from 'chalk';

const API_KEY = 'a3a5801d652e419cd17987db3b5c43ea';

function getData() {

    let city = process.argv[2];

    if (!city) {
        console.log(chalk.red('Please provide a city name'));
        console.log(chalk.red('Example: node app.js London'));
        process.exit(1);
    }

    getWeather(city)
        .then((data) => { printWeather(city, data) })
        .catch(handleError)

}

async function getWeather(city) {

    try {

        let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

        let response = await axios.get(endpoint, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric',
            },
        });

        return response.data;

    } catch (error) {
        handleError(error);
    }
}

function printWeather(city, data) {
    console.log(chalk.cyan.bold(`\n☁️  Weather in ${city} ☁️`));
    console.log(chalk.white(`📝 Description: ${data.weather[0].description}`));
    console.log(chalk.yellow(`🌡️  Temperature: ${data.main.temp}°C`));
    console.log(chalk.magenta(`🌬️  Feels like: ${data.main.feels_like}°C`));
    console.log(chalk.green(`💧 Humidity: ${data.main.humidity}%`));
    console.log(chalk.blue(`🌪️  Wind: ${data.wind.speed}m/s`));
    console.log(chalk.gray(`☁️  Cloudiness: ${data.clouds.all}%\n`));
}

function handleError(error) {

    if (error.response) {

        console.log(
            chalk.red('Error:'),
            chalk.yellow(error.response.data.message)
        )

    } else if (error.request) {

        console.log(chalk.red('Error:'), chalk.yellow(error.request));

    } else {

        console.log(chalk.red('Error:'), chalk.yellow(error.message));

    }

    process.exit(1);
}

getData();
