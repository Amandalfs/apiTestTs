import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";


class ListCategoryController {
    constructor(private listCategoryUseCase: ListCategoryUseCase){}
    
    handle(req: Request, res: Response):Response{

        const categories = this.listCategoryUseCase.execute();
        return res.status(201).json({categories});
    
    }
}

export { ListCategoryController }