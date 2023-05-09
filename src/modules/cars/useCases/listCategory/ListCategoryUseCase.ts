import { Category } from "../../modal/Category";
import { ICategoriesRepository } from "../../repositories/implementations/ICategoriesRepository";

class ListCategoryUseCase {
    constructor(private categoryRepository: ICategoriesRepository){}

    execute(): Category[]{
        const categories = this.categoryRepository.list();

        return categories;
    }
}

export { ListCategoryUseCase }