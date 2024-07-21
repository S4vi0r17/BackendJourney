import { faker } from '@faker-js/faker';
import db from '../config/db';
import Guitar from '../models/guitar.model';

async function seedGuitars() {
  try {
    await db.sync({ force: true }); // Esto elimina y vuelve a crear todas las tablas

    for (let i = 1; i < 9; i++) {
      await Guitar.create({
        name: `product ${i}`,
        description: faker.lorem.paragraph(),
        price: faker.number.float({ min: 1000, max: 2000, precision: 0.01 }),
        image: `/img/product${i + 1}.webp`
      });
    }

    console.log('Datos falsos insertados correctamente');
  } catch (error) {
    console.error('Error insertando datos falsos:', error);
  } finally {
    await db.close();
  }
}

export default seedGuitars;
