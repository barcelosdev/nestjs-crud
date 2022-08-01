"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const apiUrl = "https://viacep.com.br/ws/";
const json = "/json/";
let AddressService = class AddressService {
    async findCep(cep) {
        cep.replace('/[^0-9]/g', '');
        if (cep.length <= 8) {
            return getUrl(`${apiUrl}${cep}${json}`);
        }
        else {
            return JSON.parse(JSON.stringify("Invalid CEP"));
        }
    }
};
AddressService = __decorate([
    (0, common_1.Injectable)()
], AddressService);
exports.AddressService = AddressService;
async function getUrl(url) {
    let res;
    await axios_1.default.get(url).then(response => {
        let properties = {
            cep: response.data.cep,
            street: response.data.logradouro,
            district: response.data.bairro,
            city: response.data.localidade,
            uf: response.data.uf,
        };
        res = properties;
    });
    return res;
}
//# sourceMappingURL=address.service.js.map