import express from 'express';
import bodyParser from 'body-parser';
import controller from '../controllers/index.controllers.js';
import jwt from 'jsonwebtoken';
import verifyToken from '../middlewares/verifyToken.js';


const router = express.Router();

router.use(express.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//Routes

router.get('/', (req, res) => res.send('Hello World!'));
router.get('/test', (req, res) => {

    console.log("Testing")
    res.send("Testing");

})

router.get('/api/products', controller.getProducts);
router.get('/api/users', controller.getUsers);
router.post('/api/uncryptToken', controller.uncryptToken);
router.post('/api/findUser', controller.getOneUser);
router.post('/product', controller.postProduct);
router.put('/product', controller.updateProduct);
router.delete('/product', controller.deleteProduct);

router.post('/user', controller.postUser);
router.put('/api/user', controller.updateUser);
router.post('/api/login', controller.login);
router.post('/api/register', controller.register);

//Restricted

router.get('/shielded', verifyToken, controller.shielded);
router.post("/api/create-payment-intent", controller.createPaymentIntent);
//Login




export default router;
