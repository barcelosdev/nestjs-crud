import { Injectable } from "@nestjs/common";
import { Guitar } from "../entities/guitar.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class GuitarService {

    constructor(
        @InjectRepository(Guitar)
        private repository: Repository<Guitar>
    ){}

    create(guitar){

    }
}