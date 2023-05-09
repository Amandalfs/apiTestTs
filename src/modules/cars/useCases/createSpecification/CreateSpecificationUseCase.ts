import { ISpecificationRepository } from "../../repositories/implementations/ISpecificationRepository";

interface IRequest{
    name: string,
    description:string
}

class CreateSpecificationUseCase{

    constructor(private specificationRepository: ISpecificationRepository){}

    execute({name, description}: IRequest): void{
        const specificationAlreadyExists = this.specificationRepository.findByname(name);

        if(specificationAlreadyExists){
            throw new Error("Specification Alreadt Exists")
        }

        this.specificationRepository.create({
            name, 
            description
        })
    }
}

export { CreateSpecificationUseCase };