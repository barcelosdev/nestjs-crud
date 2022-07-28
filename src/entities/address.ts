import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import * as uuid from "uuid"

@Entity()
export class Address {
    @PrimaryColumn()
    private id: string;
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

    constructor(id?: string) {
        this.id = id ?? uuid.v4()
    }

    public get _id() { return this.id }
}