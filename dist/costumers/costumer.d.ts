export declare class Costumer {
    protected _id: string;
    protected _name: string;
    protected _email: string;
    private _createdAt;
    constructor(name: string, email: string, id?: string);
    get id(): string;
    get name(): string;
    set name(name: string);
    get email(): string;
    set email(email: string);
    get createdAt(): string;
    set createdAt(createdAt: string);
}
