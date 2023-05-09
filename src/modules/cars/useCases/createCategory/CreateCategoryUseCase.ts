import { ICategoriesRepository } from "../../repositories/implementations/ICategoriesRepository";

interface IRequest{ 
    name:string, 
    description: string
}

class CreateCategoryUseCase {

    constructor(private categoriesRepository: ICategoriesRepository){}

    execute({name, description}: IRequest): void{

        const categoriesAlreadyExists = this.categoriesRepository.findByname(name);

        if(categoriesAlreadyExists){
            throw new Error("Category Already Exist!");
        }
    
        this.categoriesRepository.create({name, description})
    }
}

export { CreateCategoryUseCase }