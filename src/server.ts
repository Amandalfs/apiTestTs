import express  from "express";
import { routers } from "./routes";
import swaggerUi from "swagger-ui-express";

import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());
app.use(routers);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3344, ()=> console.log("Run Server.."));
