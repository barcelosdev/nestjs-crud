import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CustomerService } from "../services/customer.service";
import { CustomerDTO } from "src/dtos/customer.dto";

@ApiTags('customer')
@Controller('customer')
export class CustomerController {

    constructor(private customerService: CustomerService) { }

    @Post()
    async create(@Body() customer: CustomerDTO) {
        return await this.customerService.create(customer)
    }

    @Get()
    async listAll() {
        return await this.customerService.listAll()
    }

    @Put('/:id')
    async update(@Param('id') id: string, @Body() customer: CustomerDTO) {
        return await this.customerService.update(id, customer)
    }

    @Get('/:id')
    async findById(@Param('id') id: string) {
        return await this.customerService.findById(id)
    }

    @Delete('/:id')
    async delete(@Param('id') id: string) {
        return await this.customerService.delete(id)
    }
}