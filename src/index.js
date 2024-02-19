import express from 'express';
import router from './routes/index.routes.js';
import dotenv from 'dotenv';
import connectDB from './config/index.config.js';
import jwt from 'jsonwebtoken';
import errorHandlerer from './middlewares/errorHandlerer.js';
import Stripe from 'stripe'
import cors from 'cors'

dotenv.config();

const app = express()
const port = 3000

connectDB();

const stripe = new Stripe("sk_test_51OL4E7GEU6GUNtdOv49pwzQH9GIm5A0g8CgPDVSEFSDNADq8mp632AsUJ1HiHhvZlVbjAvyEU6td3u98kNuXiKiq00SJYm8Dhf"); 

app.use(cors());
app.use(express.static('static'));
app.use(router);
app.use(errorHandlerer);







app.listen(port, () => console.log(`Example app listening on port ${port}!`))