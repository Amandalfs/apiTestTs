import { Router, Request, Response } from 'express';
import multer from 'multer';

const uplaod = multer({
    dest: "./tmp"
});


const categoriesRoutes = Router();

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoryController } from '../modules/cars/useCases/listCategory';
import { importCategoryController } from '../modules/cars/useCases/importCategory';

categoriesRoutes.post('/', (req: Request, res: Response)=>{
    return createCategoryController.handle(req, res);
})

categoriesRoutes.get('/', (req: Request, res: Response)=>{
    return listCategoryController.handle(req, res);
})

categoriesRoutes.post('/import', uplaod.single("file"), (req: Request, res: Response)=>{
    return importCategoryController.handle(req, res);
})
export { categoriesRoutes};