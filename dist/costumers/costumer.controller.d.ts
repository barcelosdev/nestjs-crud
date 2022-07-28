import { CostumerService } from "./costumer.service";
export declare class CostumerController {
    private costumerService;
    constructor(costumerService: CostumerService);
    createCostumer(body: any): Promise<any>;
    update(body: any): Promise<any>;
    findById(body: any): Promise<import("./costumer").Costumer>;
    listAll(): Promise<import("./costumer").Costumer[]>;
    delete(body: any): Promise<void>;
}
