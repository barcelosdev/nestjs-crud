import { Address } from "./address"
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm"
import { EntityDatas } from "../core/domain/entity"

@Entity()
export class Costumer extends EntityDatas{

    @Column()
    protected name: string

    @Column()
    protected email: string

    @Column()
    private createdAt: string

    @OneToOne(() => Address)
    @JoinColumn({name: "address_id", referencedColumnName: "id"})
    public address: Address

    constructor(name: string, email: string, address: Address) {
        super()
        this.name = name
        this.email = email
        this.address = address
        this.createdAt = new Date().toLocaleString()
    }

    public get _name() { return this.name }
    public set _name(name: string) { this.name = name }

    public get _email() { return this.email }
    public set _email(email: string) { this.email = email }

    public get _createdAt() { return this.createdAt }
    public set _createdAt(createdAt: string) { this.createdAt = createdAt }
}