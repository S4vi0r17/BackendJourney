import Sequelize from 'sequelize';
import db from '../config/db';

const Guitar = db.define('guitar', {
    name: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.FLOAT
    },
    image: {
        type: Sequelize.STRING
    }
});

export default Guitar;
