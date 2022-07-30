import { EntityDatas } from "../core/domain/entity";
export declare class Address extends EntityDatas {
    cep: string;
    street: string;
    number: string;
    district: string;
    city: string;
    uf: string;
    constructor();
}
