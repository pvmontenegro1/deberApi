import {Router} from "express";
import {getUser, getUsers, postUser, updateUser,deleteUser} from "../controllers/users.controller.js";

const router= Router();
router.get("/users", getUsers);
router.get("/users/:id", getUser);
    
router.delete('/users/:id',deleteUser);
router.post('/users', postUser);//crea el usuario lo agrega en la bd


router.put('/users/:id', updateUser); //actualiza el usuario

export default router;