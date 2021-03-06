import { Router } from "express"
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplementController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/LisTagsController";
import { ListUsersController } from "./controllers/ListUsersController";
import * as path from 'path';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplementController();
const listUserSendComplimentsControler = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

/* 
    Rotas da API
*/
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);
router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsControler.handle);
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsController.handle);
router.get("/tags", ensureAuthenticated, listTagsController.handle);
router.get("/users", ensureAuthenticated, listUsersController.handle)

/* 
    Rotas do Frontend
*/
router.get("/", function(req, res){
    res.render(path.join(__dirname, '../src/views/home'));
});
router.get("/home", function(req, res){
    res.render(path.join(__dirname, '../src/views/home'));
});
router.get("/login", function(req, res){
    res.render(path.join(__dirname, '../src/views/login'));
});

export { router }