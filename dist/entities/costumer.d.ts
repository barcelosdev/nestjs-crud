import { Address } from "./address";
export declare class Costumer {
    private id;
    protected name: string;
    protected email: string;
    private createdAt;
    address: Address;
    constructor(name: string, email: string, address: Address, id?: string);
    get _id(): string;
    get _name(): string;
    set _name(name: string);
    get _email(): string;
    set _email(email: string);
    get _createdAt(): string;
    set _createdAt(createdAt: string);
}
