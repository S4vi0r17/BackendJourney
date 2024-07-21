import { faker } from '@faker-js/faker';
import db from '../config/db';
import Guitar from '../models/guitar.model';
import Blog from '../models/blog.model';

async function seedData() {
  try {
    await db.sync({ force: true }); // Esto elimina y vuelve a crear todas las tablas

    // Seed Guitars
    for (let i = 1; i < 9; i++) {
      await Guitar.create({
        name: `product ${i}`,
        description: faker.lorem.paragraph(),
        price: faker.number.float({ min: 1000, max: 2000, precision: 0.01 }),
        image: `/img/product${i + 1}.webp`
      });
    }

    // Seed Blogs
    const titles = [
      'The Art of Guitar Setup: How to Get the Perfect Sound',
      'Exploring the World of Guitar Effects Pedals',
      'Famous Guitars in Rock History: Icons and Legends'
    ];

    for (let i = 1; i <= titles.length; i++) {
      await Blog.create({
        title: titles[i - 1],
        image: `/img/blog-${i}.jpg`,
        date: faker.date.recent(),
        author: faker.name.fullName(),
        content: faker.lorem.paragraphs()
      });
    }

    console.log('Datos falsos insertados correctamente');
  } catch (error) {
    console.error('Error insertando datos falsos:', error);
  } finally {
    await db.close();
  }
}

export { seedData };
