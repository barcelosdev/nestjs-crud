export declare class Address {
    private id;
    cep: string;
    street: string;
    number: string;
    district: string;
    city: string;
    uf: string;
    constructor(id?: string);
    get _id(): string;
}
