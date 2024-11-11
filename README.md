Para ejecutar el proyecto es necesario crear en este repositorio las variables de entorno 
es decir un archivo .env en donde se llene las credenciales correspondientes:
DB_USER=""
DB_HOST="db"
DB_PASSWORD=""
DB_DATABASE=""
DB_PORT=5432
DATABASE_URL=postgres://"usuer":"password"@db:5432/database

Paso siguiente se crea el contenedor e imagen de docker:
con los siguientes comandos:

docker-compose up --build

Luego se arranca las pruebas con lo siguiente:
Método Get
localhost:4000/users
localhost:400/users/:id
Método Post
localhost:4000/users

y se agrega lo siguiente:
 {
        "nombre": "Jean Negra con lineas moradas",
        "descripcion": "Jean de algodón, talla XL que va con jeam",
        "precio": "59.99",
        "cantidad_stock": 1342,
        "categoria_id": 1,
        
    }
Método Delete
localhost:4000/users/:id
Método Put
localhost:4000/users/:id
Se copia y pega los datos del :id y se actualiza  a los datos requeridos en la seccion json
y se cambia el producto:
{
        "nombre": "Jean Negra con lineas moradas (se edita)",
        "descripcion": "Jean de algodón, talla XL que va con jeam",
        "precio": "59.99",
        "cantidad_stock": 1342,
        "categoria_id": 1,
}