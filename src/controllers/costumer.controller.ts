import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CostumerService } from "../services/costumer.service";

@ApiTags('costumer')
@Controller('costumer')
export class CostumerController {

    constructor(private costumerService: CostumerService) {}

    @Post()
    async createCostumer(@Body() body) {
        return await this.costumerService.create(body)
    }
    @Put()
    async update(@Body() body) {
        return await this.costumerService.update(body)
    }
    @Get()
    async findById(@Body() body) {
        return await this.costumerService.findById(body)
    }
    @Get('/list')
    async listAll() {
        return await this.costumerService.listAll()
    }
    @Delete()
    async delete(@Body() body) {
        return await this.costumerService.delete(body)
    }
}