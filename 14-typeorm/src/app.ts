import express from "express";
import morgan from "morgan";
import cors from "cors";
import { AppDataSource } from "./data-source";
import bookRoutes from "./routes/bookRoutes";
import authorRoutes from "./routes/authorRoutes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Para poder recibir datos de formularios
app.use(morgan("dev"));
app.use(cors());

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("Data Source has been initialized!");

    // Rutas
    app.use("/books", bookRoutes);
    app.use("/authors", authorRoutes);

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.log("Error during Data Source initialization:", error);
  }
}

main();

/*
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");

    // Rutas
    app.use("/books", bookRoutes);
    app.use("/authors", authorRoutes);

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => console.log("Error during Data Source initialization:", error));
*/
