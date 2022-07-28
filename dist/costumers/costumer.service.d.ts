import { Costumer } from "./costumer";
import { CRUD } from "../core/interfaces/crud";
export declare class CostumerService implements CRUD<Costumer> {
    private repository;
    private addressService;
    constructor();
    create(body: any): Promise<any>;
    update(costumer: any): Promise<any>;
    findById(id: any): Promise<Costumer>;
    listAll(): Promise<Costumer[]>;
    delete(id: any): Promise<void>;
}
