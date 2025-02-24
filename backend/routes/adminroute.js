import express from 'express';
import { login, logout, signup } from '../controller/admincontroller.js';

const adminrouter = express.Router();

adminrouter.post('/signup',signup);
adminrouter.post('/login',login);
adminrouter.get('/logout',logout)

export default adminrouter;