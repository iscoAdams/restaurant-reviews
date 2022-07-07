// import Express  from "express";
// const router = Express.Router();
//try routes and status between brackets and see if there is an error
import getOne from "../controllers/getOne";
import getAll from "../controllers/getAll";
import create from "../controllers/create";
import update from "../controllers/update";
import deleteOne from "../controllers/deleteOne";
import { StatusCodes } from "http-status-codes";
import { Router } from "express";

export default Router;