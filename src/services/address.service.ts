import { Injectable } from "@nestjs/common"
import axios from "axios"
import { Address } from "../entities/address"

const apiUrl = "https://viacep.com.br/ws/"
const json = "/json/"

@Injectable()
export class AddressService {

    async findCep(cep: string) {
        return getUrl(`${apiUrl}${cep}${json}`)
    }
}

async function getUrl(url: string): Promise<Address>{
    let res
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