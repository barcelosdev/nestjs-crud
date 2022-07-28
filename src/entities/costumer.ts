import { Address } from "./address"
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm"
import * as uuid from "uuid"

@Entity()
export class Costumer {

    @PrimaryColumn()
    private id: string

    @Column()
    protected name: string

    @Column()
    protected email: string

    @Column()
    private createdAt: string

    @OneToOne(() => Address)
    @JoinColumn({name: "address_id"})
    public address: Address

    constructor(name: string, email: string, address: Address, id?: string) {
        this.id = id ?? uuid.v4()
        this.name = name
        this.email = email
        this.address = address
        this.createdAt = new Date().toLocaleString()
    }
    
    public get _id() { return this.id }

    public get _name() { return this.name }
    public set _name(name: string) { this.name = name }

    public get _email() { return this.email }
    public set _email(email: string) { this.email = email }

    public get _createdAt() { return this.createdAt }
    public set _createdAt(createdAt: string) { this.createdAt = createdAt }
}