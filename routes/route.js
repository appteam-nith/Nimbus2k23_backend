import express from 'express';
import { getUsers,postUsers,patchUser, deleteUser, getUserById } from '../controllers/User-controller.js';

const router = express.Router(); 


router.get("/users",getUsers);
router.get("/users/:id",getUserById);

router.post("/users",postUsers);

router.patch("/users/:id",patchUser);
router.delete("/users/:id",deleteUser);

export default router;