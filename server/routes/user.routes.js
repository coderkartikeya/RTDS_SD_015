import express from "express";
import {login,signup,check} from '../controllers/users.controllers.js'


const router=express.Router();
router.route("/login").post(login)
router.route("/signup").post(signup);
router.route("/check").post(check);


export default router;