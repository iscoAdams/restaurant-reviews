import  StatusCodes  from "http-status-codes";
import { Request, Response,NextFunction } from "express";

export default (req:Request, res:Response, next:NextFunction) => {
    res.status(StatusCodes.NOT_FOUND).send(
        '<h1 style = color:BurlyWood;font-family:verdana;text-align:center>not found!</h1> \
         <a href = "http://localhost:8000/">Click here to go to HOME page</a>'
     
    );
}