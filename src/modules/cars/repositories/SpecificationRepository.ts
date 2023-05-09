import { ICreateSpecificationDTO, ISpecificationRepository } from "./implementations/ISpecificationRepository";
import { Specification } from "../modal/Specification";

class SpecificationRepository implements ISpecificationRepository{
    private specifications: Specification[];

    private static INSTANCE: SpecificationRepository;

    constructor(){
        this.specifications = [];
    }

    public static getInstance():SpecificationRepository{
        if(!SpecificationRepository.INSTANCE){
            SpecificationRepository.INSTANCE = new SpecificationRepository();
        }
        return SpecificationRepository.INSTANCE;
    }

    findByname(name: string): Specification {
        const specification = this.specifications.find((specification)=> specification.name === name);
        return specification;
    }

    create({ description, name }: ICreateSpecificationDTO): void {
        const specifications = new Specification()

        Object.assign(specifications, {
            name,
            description,
            created_at: new Date()
        })

        this.specifications.push(specifications)
    }

}

export { SpecificationRepository }