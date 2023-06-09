import { Specification } from "../../modal/Specification"

interface ICreateSpecificationDTO {
    name: string,
    description: string
}

interface ISpecificationRepository {
    
    create({ description, name }:ICreateSpecificationDTO):void
    findByname(name:string):Specification
}

export { ISpecificationRepository, ICreateSpecificationDTO }