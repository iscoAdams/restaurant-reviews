import mongoose from "mongoose";

export default async (url : string) => {
   return mongoose.connect(url);
}
//.env file must be in the src directory or i am getting a Type error
//using typescript i had to move .env to the main directory
//mongoose 6 don't require any options so i'm passing only the url