import { Category } from "../modal/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./implementations/ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {

    private categorie: Category[];

    private static INSTANCE: CategoriesRepository;

    constructor(){
        this.categorie = [];
    }

    public static getInstance():CategoriesRepository{
        if(!CategoriesRepository.INSTANCE){
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        } 
        return CategoriesRepository.INSTANCE;
    }

    create({name, description}:ICreateCategoryDTO): void{
        
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        })
      
    
        this.categorie.push(category);
    }

    list(): Category[] {
        return this.categorie;
    }

    findByname(name:string): Category{
        const category = this.categorie.find((category) => category.name === name);
        return category;
    }
}

export { CategoriesRepository };