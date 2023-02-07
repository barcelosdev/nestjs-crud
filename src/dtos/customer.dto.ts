import { ApiProperty } from "@nestjs/swagger";
import { AddressDTO } from "./address.dto";

export class CustomerDTO {
    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;
    
    @ApiProperty()
    address: AddressDTO[]
}