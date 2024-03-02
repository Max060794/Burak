import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurent.controller";


/** Restaurant */
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
.get("/login", restaurantController.getLogin)
.post("/login", restaurantController.processLogin);
routerAdmin
.get("/signup", restaurantController.getSignup)
.post("/signup", restaurantController.processSignup);

/** Product */

/** User */

export default routerAdmin;

function post(arg0: string, processSignup: any) {
    throw new Error("Function not implemented.");
}
