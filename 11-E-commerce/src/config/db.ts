import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const db = new Sequelize(process.env.DATABASE_URL as string ,{
    dialect: 'postgres',
});

export default db;

/*
	.env

	DB_NAME=travelagency
	DB_USER=root
	DB_PASS=benites1234
	DB_HOST=localhost
*/
