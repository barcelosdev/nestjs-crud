import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Costumer } from "./costumer";
import { CostumerService } from "./costumer.service";

@Controller('costumer')
export class CostumerController {

    constructor(private costumerService: CostumerService) {}

    @Post()
    async createCostumer(@Body() costumer) {
        return await this.costumerService.create(costumer)
    }
    @Put()
    async update(@Body() body) {
        return await this.costumerService.update(body)
    }
    @Get()
    async findById(@Body() body) {
        return await this.costumerService.findById(body.id)
    }
    @Get('/list')
    async listAll() {
        return await this.costumerService.listAll()
    }
    @Delete()
    async delete(@Body() body) {
        return await this.costumerService.delete(body.id)
    }
}