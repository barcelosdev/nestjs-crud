import { Costumer } from "./costumer";
import { Repository } from "typeorm";
export declare class CostumerService implements CRUD<Costumer> {
    private repository;
    constructor(repository: Repository<Costumer>);
    create(body: any): any;
    update(body: any): Promise<any>;
    findById(id: any): Promise<Costumer>;
    listAll(): Promise<Costumer[]>;
    delete(id: any): Promise<void>;
}
