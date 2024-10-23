# API de Autores y Libros

Esta API permite gestionar autores y libros, donde los libros pueden tener múltiples autores y los autores pueden estar relacionados con varios libros. El objetivo es crear, actualizar, eliminar y consultar autores y libros, así como sus relaciones.

## Endpoints

### Autores

#### Crear un Autor

- **URL**: `/authors`
- **Método**: `POST`
- **Descripción**: Crea un nuevo autor.
- **Cuerpo de la solicitud** (JSON):

```json
{
  "name": "Nombre del Autor"
}
```

- **Respuesta Exitosa** (201):

```json
{
  "id": 1,
  "name": "Nombre del Autor",
  "books": []
}
```

#### Obtener todos los Autores

- **URL**: `/authors`
- **Método**: `GET`
- **Descripción**: Obtiene la lista de todos los autores, incluyendo los libros relacionados.

- **Respuesta Exitosa** (200):

```json
[
  {
    "id": 1,
    "name": "Nombre del Autor",
    "books": [
      {
        "id": 1,
        "title": "Título del Libro"
      }
    ]
  }
]
```

#### Obtener un Autor por ID

- **URL**: `/authors/:id`
- **Método**: `GET`
- **Descripción**: Obtiene un autor por su ID, incluyendo los libros relacionados.
- **Parámetro**: `id` (obligatorio) - ID del autor.

- **Respuesta Exitosa** (200):

```json
{
  "id": 1,
  "name": "Nombre del Autor",
  "books": [
    {
      "id": 1,
      "title": "Título del Libro"
    }
  ]
}
```

#### Actualizar un Autor

- **URL**: `/authors/:id`
- **Método**: `PUT`
- **Descripción**: Actualiza el nombre de un autor existente.
- **Parámetro**: `id` (obligatorio) - ID del autor.
- **Cuerpo de la solicitud** (JSON):

```json
{
  "name": "Nuevo Nombre del Autor"
}
```

- **Respuesta Exitosa** (200):

```json
{
  "id": 1,
  "name": "Nuevo Nombre del Autor"
}
```

#### Eliminar un Autor

- **URL**: `/authors/:id`
- **Método**: `DELETE`
- **Descripción**: Elimina un autor existente.
- **Parámetro**: `id` (obligatorio) - ID del autor.

- **Respuesta Exitosa** (204):
Sin contenido.

---

### Libros

#### Crear un Libro

- **URL**: `/books`
- **Método**: `POST`
- **Descripción**: Crea un nuevo libro y lo asocia con uno o más autores.
- **Cuerpo de la solicitud** (JSON):

```json
{
  "title": "Título del Libro",
  "authorIds": [1, 2]  // IDs de los autores relacionados
}
```

- **Respuesta Exitosa** (201):

```json
{
  "id": 1,
  "title": "Título del Libro",
  "authors": [
    {
      "id": 1,
      "name": "Nombre del Autor"
    },
    {
      "id": 2,
      "name": "Otro Autor"
    }
  ]
}
```

#### Obtener todos los Libros

- **URL**: `/books`
- **Método**: `GET`
- **Descripción**: Obtiene la lista de todos los libros, incluyendo los autores relacionados.

- **Respuesta Exitosa** (200):

```json
[
  {
    "id": 1,
    "title": "Título del Libro",
    "authors": [
      {
        "id": 1,
        "name": "Nombre del Autor"
      }
    ]
  }
]
```

#### Obtener un Libro por ID

- **URL**: `/books/:id`
- **Método**: `GET`
- **Descripción**: Obtiene un libro por su ID, incluyendo los autores relacionados.
- **Parámetro**: `id` (obligatorio) - ID del libro.

- **Respuesta Exitosa** (200):

```json
{
  "id": 1,
  "title": "Título del Libro",
  "authors": [
    {
      "id": 1,
      "name": "Nombre del Autor"
    }
  ]
}
```

#### Actualizar un Libro

- **URL**: `/books/:id`
- **Método**: `PUT`
- **Descripción**: Actualiza el título de un libro existente y cambia sus autores relacionados.
- **Parámetro**: `id` (obligatorio) - ID del libro.
- **Cuerpo de la solicitud** (JSON):

```json
{
  "title": "Nuevo Título del Libro",
  "authorIds": [1, 2]  // Nuevos IDs de los autores relacionados
}
```

- **Respuesta Exitosa** (200):

```json
{
  "id": 1,
  "title": "Nuevo Título del Libro",
  "authors": [
    {
      "id": 1,
      "name": "Nombre del Autor"
    },
    {
      "id": 2,
      "name": "Otro Autor"
    }
  ]
}
```

#### Eliminar un Libro

- **URL**: `/books/:id`
- **Método**: `DELETE`
- **Descripción**: Elimina un libro existente.
- **Parámetro**: `id` (obligatorio) - ID del libro.

- **Respuesta Exitosa** (204):
Sin contenido.

---

## Errores Comunes

### 404 - No encontrado

Si el recurso solicitado (autor o libro) no existe, la API devolverá un error 404:

```json
{
  "message": "Author not found"  // O "Book not found"
}
```

---

> [!NOTE]
> Asegúrate de que los autores existan antes de asociarlos con los libros.
