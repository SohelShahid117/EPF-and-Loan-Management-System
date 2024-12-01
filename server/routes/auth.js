import express  from 'express';
import {login,verify} from '../controllers/authController.js';
// import login from '../controllers/authController.js';
// import auth from '../controllers/authController.js';
// import authMiddleware from "../middleware/authMiddleware.js"
// import { verify } from 'jsonwebtoken';
// import verify from "../controllers/authController.js"


const router = express.Router()
// router.post("/login",auth.login(req,res))
router.post("/login",login)
// router.post("/verify",authMiddleware,verify)
// router.post('/verify',verify)
router.get('/verify',verify)

export default router;
