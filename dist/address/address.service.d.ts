import { Address } from "./address";
export declare class AddressService {
    findCep(cep: string): Promise<Address>;
}
