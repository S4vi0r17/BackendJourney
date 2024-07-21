import Sequelize from 'sequelize';
import db from '../config/db';

const Blog = db.define('blog', {
    title: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE
    },
    author: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    }
});

export default Blog;
