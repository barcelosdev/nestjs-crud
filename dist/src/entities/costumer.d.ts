import { Address } from "./address";
import { EntityDatas } from "../core/domain/entity";
export declare class Costumer extends EntityDatas {
    protected name: string;
    protected email: string;
    private createdAt;
    address: Address;
    constructor(name: string, email: string, address: Address);
    get _name(): string;
    set _name(name: string);
    get _email(): string;
    set _email(email: string);
    get _createdAt(): string;
    set _createdAt(createdAt: string);
}
