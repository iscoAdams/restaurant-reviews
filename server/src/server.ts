import Express,{Request,Response} from "express";
import 'dotenv/config'
import cors from "cors";
import connect from "./config/connect";
import notFound from "./middlewares/notFound";
import handleErr from "./middlewares/handleErr";
import restaurantRoutes from "./routes/restaurantRoutes";
import "express-async-errors";
const app = Express();
app.use(Express.json());
app.use(cors());
app.get('/', (req:Request, res:Response) => {
    res.send("<h1 style = color:BurlyWood;font-family:verdana;text-align:center>welcome abroad🚀</h1>");
  })
app.use('/api/v1/restaurants',restaurantRoutes);

app.use(notFound)
app.use(handleErr)

const run = async () => {
    try {
        await connect(`${process.env.MONGO_URL}`);
        const port = process.env.PORT || 8000;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
    });
    } catch (error) {
        console.log(error);
    }
}
run();

    