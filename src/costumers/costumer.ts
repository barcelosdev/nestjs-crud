import { Column, Entity, PrimaryColumn } from "typeorm"
import * as uuid from "uuid"

@Entity()
export class Costumer {

    @PrimaryColumn()
    protected _id: string
    @Column()
    protected _name: string
    @Column()
    protected _email: string
    @Column()
    private _createdAt: string

    constructor(name: string, email: string, id?: string) {
        this._id = id ?? uuid.v4()
        this._name = name
        this._email = email
        this._createdAt = new Date().toLocaleString()
    }
    
    public get id() { return this._id }

    public get name() { return this._name }
    public set name(name: string) { this._name = name }

    public get email() { return this._email }
    public set email(email: string) { this._email = email }

    public get createdAt() { return this._createdAt }
    public set createdAt(createdAt: string) { this._createdAt = createdAt }
}