import { CostumerService } from "./costumer.service";
export declare class CostumerController {
    private costumerService;
    constructor(costumerService: CostumerService);
    createCostumer(body: any): Promise<any>;
    update(body: any): Promise<any>;
    findById(body: any): Promise<any>;
    listAll(): Promise<any>;
    delete(body: any): Promise<any>;
}
