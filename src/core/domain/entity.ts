import { PrimaryColumn } from "typeorm";
import * as uuid from "uuid"

export abstract class EntityDatas {

    @PrimaryColumn("uuid")
    private id: string

    constructor(id?: string) {
        this.id = id ?? uuid.v4()
    }

    public get _id() { return this.id }
}