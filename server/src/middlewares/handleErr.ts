import customErr from '../errors/customErr';
import { Request, Response,NextFunction } from "express";
export default async (err:Error|customErr, req:Request, res:Response, next:NextFunction) => {
    if (err instanceof customErr) {
      return  res.status(err.statusCode).json({
            status: err.statusCode,
            message: err.message
        });
    } 
       res.status(500).json({
            status: 500,
            message: 'Internal Server Error'
        });
}
//may not work well as the type of error here is customErr