import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from "../entities/customer.entity";
import { Repository } from "typeorm";
import { CRUD } from "../core/interfaces/crud";
import { Address } from "../entities/address.entity";
import { AddressService } from "./address.service";
import { CustomerDTO } from "src/dtos/customer.dto";

@Injectable()
export class CustomerService implements CRUD<Customer | CustomerDTO> {

    @InjectRepository(Customer)
    private customerRepo: Repository<Customer>
    @InjectRepository(Address)
    private addressRepo: Repository<Address>
    private addressService: AddressService

    constructor() {
        this.addressService = new AddressService()
    }

    async create(customer: CustomerDTO) {
        try {
            let addresses = []
            let props = await this.addressService.findCep(customer.address['cep'])

            let address = new Address()

            address.cep = props['cep']
            address.street = props['street']
            address.number = customer.address['number']
            address.district = props['district']
            address.city = props['city']
            address.uf = props['uf']

            if (await this.validateEmail(customer.email) === false) {
                addresses.push(address)

                const newCustomer = new Customer(
                    customer['name'],
                    customer['email'],
                    addresses,
                )

                this.addressRepo.save(address)
                this.customerRepo.save(newCustomer)

                return {
                    status: 200,
                    message: "Successful request",
                    data: newCustomer
                }
            } else {
                return {
                    status: 204,
                    message: "Registration failed. This e-mail already exist!"
                }
            }
        } catch (error) {
            return error
        }
    }

    async update(id: string, body: CustomerDTO) {
        try {
            let customer = await this.findById(id)

            if (customer) {
                customer._name = body.name
                customer._email = body.email

                this.customerRepo.update(id, customer)

                return {
                    status: 200,
                    message: "Sucessful updated",
                    data: customer
                }
            } else {
                return {
                    status: 204,
                    message: "Request failed. No customer was found",
                }
            }

        } catch (error) {
            return error
        }
    }

    async validateEmail(email: string) {
        const customer = await this.customerRepo
            .createQueryBuilder("customer")
            .where("customer.email = :email", { email })
            .getOne()

        return customer ? true : false
    }

    async findById(id: string): Promise<Customer> {
        try {
            const customer = await this.customerRepo
                .createQueryBuilder("customer")
                .where("customer.id = :id", { id: id })
                .getOne()

            return customer
        } catch (error) {
            return error
        }
    }

    async listAll(): Promise<Customer[]> {
        try {
            return await this.customerRepo.find()
        } catch (error) {
            return error
        }
    }

    async delete(id: string) {
        try {
            const customer = await this.findById(id)

            if (customer) {
                const customerAddress = await this.addressRepo
                    .createQueryBuilder("address")
                    .where("address.customer = :customer_id", { customer_id: customer._id })
                    .getOne()

                this.addressRepo.remove(customerAddress)
                this.customerRepo.remove(customer)

                return {
                    status: 200,
                    message: "Successful delete",
                }
            } else {
                return {
                    status: 204,
                    message: "Delete failed. No customer found",
                }
            }
        } catch (error) {
            return error
        }
    }
}