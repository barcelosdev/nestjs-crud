import { CostumerService } from "../services/costumer.service";
export declare class CostumerController {
    private costumerService;
    constructor(costumerService: CostumerService);
    createCostumer(body: any): Promise<any>;
    update(body: any): Promise<any>;
    findById(body: any): Promise<import("../entities/costumer").Costumer>;
    listAll(): Promise<import("../entities/costumer").Costumer[]>;
    delete(body: any): Promise<void>;
}
