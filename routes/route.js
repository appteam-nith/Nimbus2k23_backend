import express from 'express';
import { getUsers,postUsers,patchUser, deleteUser,getUsersByName,getUserById} from '../controllers/User-controller.js';

const router =express.Router(); 

router.get("/users/:id",getUserById);
router.get("/users/search/:key",getUsersByName);

router.post("/users",postUsers);

router.patch("/users/:id",patchUser);
router.delete("/users/:id",deleteUser);

export default router;