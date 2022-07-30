import { Address } from "../entities/address";
export declare class AddressService {
    findCep(cep: string): Promise<Address>;
}
