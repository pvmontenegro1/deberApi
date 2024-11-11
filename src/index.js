import express from 'express';
import {PORT} from "./config.js";
import userRoutes from './routes/users.routes.js';
import morgan from 'morgan'//para que registre la peticion /get/post/put
const app= express();
app.use(morgan('dev'))
app.use(express.json());
app.use(userRoutes);
app.listen(PORT);
console.log('server el linea', PORT);
