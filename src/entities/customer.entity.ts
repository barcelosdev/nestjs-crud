import { Address } from "./address.entity"
import { Column, CreateDateColumn, Entity, OneToMany, UpdateDateColumn } from "typeorm"
import { EntityDatas } from "../core/domain/entity"

@Entity({ name: "customer" })
export class Customer extends EntityDatas {

    @Column({ nullable: false })
    protected name: string

    @Column({ unique: true, nullable: false })
    protected email: string

    @CreateDateColumn({ name: "created_at", type: "timestamp", update: false })
    private createdAt: Date

    @UpdateDateColumn({ name: "updated_at", type: "timestamp" })
    private updatedAt: Date

    @OneToMany(() => Address, (address) => address.customer)
    public address: Address[]

    constructor(name: string, email: string, address: Address[]) {
        super()
        this.name = name
        this.email = email
        this.address = address
        this.createdAt = new Date()
    }

    public get _name() { return this.name }
    public set _name(name: string) { this.name = name }

    public get _email() { return this.email }
    public set _email(email: string) { this.email = email }

    public get _createdAt() { return this.createdAt }
    public set _createdAt(createdAt: Date) { this.createdAt = createdAt }

    public get _updatedAt() { return this.updatedAt }
    public set _updatedAt(updatedAt: Date) { this.updatedAt = updatedAt }
}