import {Router} from 'express';
const router = Router();

import * as controller from '../controllers/controller.js'
//question routes API

router.route('/questions')
.get(controller.getQuestions)  //get request
.post(controller.insertQuestions) //post request
.delete(controller.deleteQuestions) //delete request

router.route('/result')
   .get(controller.getResult)
   .post(controller.postResult)
   .delete(controller.deleteResult)



export default router;


