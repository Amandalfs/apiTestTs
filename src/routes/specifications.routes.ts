import { Router, Request, Response } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationRoutes = Router();



specificationRoutes.post('/', (req: Request, res: Response)=>{
    return createSpecificationController.handle(req, res);
})

export { specificationRoutes };

