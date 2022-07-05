<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Individual Project - Henry Dogs

<p align="left">
  <img height="200" src="./dog.png" />
</p>


## Comenzando

Para poder ver el proyecto en ejecución:
 1. Instalar el gestor de base de datos Postgresql. Lo puedes descargar aqui https://www.postgresql.org/download/
 2. Forkear el repositorio para tener una copia del mismo en tu GitHub.
 3. Clonar el repositorio en tu computadora.
 4. En la carpeta `api` crear un archivo llamado: `.env` que tenga la siguiente forma:
    ```
    DB_USER=tuUsuarioDePostgres
    DB_PASSWORD=tuPasswordDePostgres
    DB_HOST=localhost
    YOUR_API_KEY=4ef3b90f-ab14-4a75-9545-89c5bc01ef5a
    ```
    Reemplazar `tuusuariodepostgres` y `tupasswordDePostgres` con tus propias credenciales para conectarte a postgres.
 5. Será necesario crear una base de datos llamada `dogs` en postgresql. Para saber como dar click en el siguiente enlace https://apuntes-snicoper.readthedocs.io/es/latest/programacion/postgresql/comandos_consola_psql.html
 6. Una vez completado el paso anterior, desde la terminal, y parado en la carpeta <strong>'api'</strong>, ejecutar los comandos ```npm i``` o ```npm install``` para instalar las dependencias. Luego, ```npm start``` para levantar la base de datos y correr el Back-end.
 7. Repetir los comandos en otra terminal, pero situado en la carpeta <strong>'client'</strong>.
 8. El proyecto debería estarse corriendo en tu <em>localhost:3000</em> en tu navegador.

## Enunciado

La idea general fue crear una aplicación en la cual se puedan ver distintas razas de perro junto con información relevante de las mismas utilizando la api externa [the dog api](https://thedogapi.com/) y a partir de ella poder, entre otras cosas:

  - Buscar razas
  - Filtrarlos / Ordenarlos
  - Agregar nuevos razas



#### Tecnologías utilizadas:
- [ ] JavaScript
- [ ] HTML
- [ ] CSS
- [ ] React
- [ ] Redux
- [ ] Node
- [ ] Express
- [ ] SQL
- [ ] Sequelize
- [ ] Postgres
