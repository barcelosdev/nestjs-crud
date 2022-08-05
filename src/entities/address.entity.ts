import { EntityDatas } from "../core/domain/entity";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, Unique } from "typeorm"

@Entity()
export class Address extends EntityDatas{
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

    constructor() { super() }
}