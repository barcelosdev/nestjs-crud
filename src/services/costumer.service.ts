import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Costumer } from "../entities/costumer";
import { Repository } from "typeorm";
import { CRUD } from "../core/interfaces/crud";
import { Address } from "../entities/address";
import { AddressService } from "./address.service";

@Injectable()
export class CostumerService implements CRUD<Costumer> {

    @InjectRepository(Costumer)
    private costumerRepo: Repository<Costumer>
    @InjectRepository(Address)
    private addressRepo: Repository<Address>

    private addressService: AddressService

    constructor() {
        this.addressService = new AddressService()
    }

    async create(body) {
        try {
            let properties = this.addressService.findCep(body['cep'])

            let address = new Address()

            address.cep = (await properties).cep
            address.street = (await properties).street
            address.number = body['number']
            address.district = (await properties).district
            address.city = (await properties).city
            address.uf = (await properties).uf

            this.addressRepo.save(address)

            const newCostumer: Costumer = new Costumer(
                body['name'], 
                body['email'], 
                address,
            )
            
            this.costumerRepo.save(newCostumer)

            return JSON.parse(JSON.stringify(newCostumer))
        } catch (error) {
            return JSON.parse(JSON.stringify(error))
        }
    }
    async update(costumer) {
        try {
            let cos: Costumer = await this.findById(costumer._id)

            cos = costumer
            
            this.costumerRepo.save(cos)

            return JSON.parse(JSON.stringify(cos))
        } catch (error) {
            return JSON.parse(JSON.stringify(error))
        }
    }
    async findById(id): Promise<Costumer> {
        try {
            return await this.costumerRepo.findOneBy(id)
        } catch (error) {
            return JSON.parse(JSON.stringify(error))
        }
    }
    async listAll(): Promise<Costumer[]> {
        try {
            return await this.costumerRepo.manager.query("SELECT * FROM costumer c")   
        } catch (error) {
            return JSON.parse(JSON.stringify(error))
        }
    }
    async delete(id): Promise<void> {
        try {
            const costumer = await this.findById(id)
            this.costumerRepo.remove(costumer)
        } catch (error) {
            return JSON.parse(JSON.stringify(error))
        }
    }
}