import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Costumer } from "./costumer";
import { Repository } from "typeorm";

@Injectable()
export class CostumerService implements CRUD<Costumer> {

    constructor(
        @InjectRepository(Costumer)
        private repository: Repository<Costumer>,
    ){}

    create(body) {
        try {
            const newCostumer: Costumer = new Costumer(body['_name'], body['_email'])
            this.repository.save(newCostumer)

            return JSON.parse(JSON.stringify(newCostumer))
        } catch (error) {
            return JSON.parse(JSON.stringify(error))
        }
    }
    async update(body) {
        try {
            const cos = await this.findById(body['_id'])

            cos.name = body['_name']
            cos.email = body['_email']
            
            this.repository.save(cos)

            return JSON.parse(JSON.stringify(cos))
        } catch (error) {
            return JSON.parse(JSON.stringify(error))
        }
    }
    findById(id): Promise<Costumer> {
        try {
            return this.repository.findOneBy({id})   
        } catch (error) {
            return JSON.parse(JSON.stringify(error))
        }
    }
    async listAll(): Promise<Costumer[]> {
        try {
            return await this.repository.manager.query("SELECT * FROM costumer c")   
        } catch (error) {
            return JSON.parse(JSON.stringify(error))
        }
    }
    async delete(id): Promise<void> {
        try {
            const costumer = await this.findById(id)
            this.repository.remove(costumer)
        } catch (error) {
            return JSON.parse(JSON.stringify(error))
        }
    }
}