import { EntityDatas } from "../core/domain/entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm"
import { Customer } from "./customer.entity";

@Entity()
export class Address extends EntityDatas {
    @Column()
    public cep: string;
    @Column()
    public street: string;
    @Column()
    public number: string;
    @Column()
    public district: string;
    @Column()
    public city: string;
    @Column()
    public uf: string;
    @ManyToOne(() => Customer, (customer) => customer.address, { nullable: false })
    @JoinColumn({ name: "customer_id", referencedColumnName: "id" })
    public customer: Customer

    constructor() { super() }
}