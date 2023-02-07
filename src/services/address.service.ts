import { Address } from "../entities/address.entity"
import { Injectable } from "@nestjs/common"
import axios from "axios"

const apiUrl = "https://viacep.com.br/ws/"
const json = "/json/"

@Injectable()
export class AddressService {

    async findCep(cep: string) {

        cep.replace('/[^0-9]/g','')

        if(cep.length <= 8) {
            return getUrl(`${apiUrl}${cep}${json}`)
        } else {
            return JSON.parse(JSON.stringify("Invalid postal code"))
        }
    }
}

async function getUrl(url: string): Promise<Address>{
    let res;
    await axios.get(url).then(response => {
        
        let properties = {
            cep: response.data.cep,
            street: response.data.logradouro,
            district: response.data.bairro,
            city: response.data.localidade,
            uf: response.data.uf,
        }

        res = properties
    })
    return res
}