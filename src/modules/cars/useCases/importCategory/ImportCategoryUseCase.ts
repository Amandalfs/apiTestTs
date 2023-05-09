import fs from "fs";
import { parse } from "csv-parse";
import { ICategoriesRepository } from "../../repositories/implementations/ICategoriesRepository";

interface IImportCategory {
    name: string,
    description: String
}

class ImportCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository){}

    loadCategorie(file: Express.Multer.File): Promise<IImportCategory[]>{
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path)
            const categories: IImportCategory[] = [];

            const parseFile = parse();
            
            stream.pipe(parseFile);

            parseFile.on("data", async (line:any)=>{
                const [ name, description ] = line;
                categories.push({name, description});
            })

            .on("end", ()=>{
                fs.promises.unlink(file.path);
                resolve(categories)
            })
            .on("error", (err)=>{
                reject(err);
            })
        })   
    }

    async execute(file: Express.Multer.File): Promise<void>{
        const categories = await this.loadCategorie(file);
        
        categories.map(async (category)=>{
            const {name, description } = category;
            
            const existCategory = this.categoriesRepository.findByname(name);

            if(!existCategory){
                this.categoriesRepository.create({
                    name,
                    description
                })
            }
        })
    }
}

export { ImportCategoryUseCase }