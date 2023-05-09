import { Category } from "../../modal/category"

interface ICreateCategoryDTO{
    name: string,
    description: string
}


interface ICategoriesRepository{
    findByname(name:string): Category;

    list(): Category[]

    create({}: ICreateCategoryDTO): void
}

export { ICategoriesRepository, ICreateCategoryDTO }