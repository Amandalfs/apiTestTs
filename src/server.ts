import express  from "express";
import { routers } from "./routes";

const app = express();

app.use(express.json());
app.use(routers)

app.listen(3344, ()=> console.log("Run Server.."))
