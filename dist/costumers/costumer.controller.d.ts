import { Costumer } from "./costumer";
import { CostumerService } from "./costumer.service";
export declare class CostumerController {
    private costumerService;
    constructor(costumerService: CostumerService);
    createCostumer(costumer: any): Promise<any>;
    update(body: any): Promise<any>;
    findById(body: any): Promise<Costumer>;
    listAll(): Promise<Costumer[]>;
    delete(body: any): Promise<void>;
}
