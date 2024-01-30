import getProducts from "./products/getProducts.js";
import getUsers from "./users/getUsers.js";
import getOneUser from "./users/getOneUser.js";
import postProduct from "./products/postProduct.js";
import login from "./login/login.js";
import register from "./login/register.js";
import postUser from "./users/postUser.js";
import shielded from "./shield/shielded.js";
import deleteProduct from "./products/deleteProduct.js";
import updateProduct from "./products/updateProduct.js";
import uncryptToken from "./login/uncryptToken.js";
import updateUser from "./users/updateUser.js";
import createPaymentIntent from "./payment/createPaymentIntent.js";



const controller = {};


controller.getProducts = getProducts;
controller.getUsers = getUsers;
controller.getOneUser = getOneUser;
controller.updateUser = updateUser;
controller.postProduct = postProduct;
controller.postUser = postUser;
controller.login = login;
controller.register = register;
controller.shielded = shielded;
controller.deleteProduct = deleteProduct;
controller.updateProduct = updateProduct;
controller.uncryptToken = uncryptToken;
controller.createPaymentIntent = createPaymentIntent;



export default controller;