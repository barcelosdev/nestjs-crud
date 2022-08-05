import { EntityDatas } from "src/core/domain/entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Guitar extends EntityDatas {
    @Column({nullable: false})
    serie: string
    @Column()
    model: string
    @Column()
    brand: string
    @Column()
    color: string
    @Column({type: "double"})
    price: number
}