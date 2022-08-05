import { Body, Controller, Post } from "@nestjs/common";
import { GuitarDTO } from "src/dtos/guitar.dto";
import { GuitarService } from "..//services/guitar.service";

@Controller('guitar')
export class GuitarController {

    constructor(private guitarService: GuitarService){}

    @Post()
    async create(@Body() guitar: GuitarDTO){
        return await this.guitarService.create(guitar)
    }
}