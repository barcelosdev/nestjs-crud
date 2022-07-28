"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CostumerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const costumer_1 = require("../entities/costumer");
const typeorm_2 = require("typeorm");
const address_1 = require("../entities/address");
const address_service_1 = require("./address.service");
let CostumerService = class CostumerService {
    constructor() {
        this.addressService = new address_service_1.AddressService();
    }
    async create(body) {
        try {
            let properties = this.addressService.findCep(body['cep']);
            let address = new address_1.Address();
            address.cep = (await properties).cep;
            address.street = (await properties).street;
            address.number = body['number'];
            address.district = (await properties).district;
            address.city = (await properties).city;
            address.uf = (await properties).uf;
            const newCostumer = new costumer_1.Costumer(body['_name'], body['_email'], address);
            this.costumerRepo.save(newCostumer);
            return JSON.parse(JSON.stringify(newCostumer));
        }
        catch (error) {
            return JSON.parse(JSON.stringify(error));
        }
    }
    async update(costumer) {
        try {
            let cos = await this.findById(costumer._id);
            cos = costumer;
            this.costumerRepo.save(cos);
            return JSON.parse(JSON.stringify(cos));
        }
        catch (error) {
            return JSON.parse(JSON.stringify(error));
        }
    }
    async findById(id) {
        try {
            return await this.costumerRepo.findOneBy(id);
        }
        catch (error) {
            return JSON.parse(JSON.stringify(error));
        }
    }
    async listAll() {
        try {
            return await this.costumerRepo.manager.query("SELECT * FROM costumer c");
        }
        catch (error) {
            return JSON.parse(JSON.stringify(error));
        }
    }
    async delete(id) {
        try {
            const costumer = await this.findById(id);
            this.costumerRepo.remove(costumer);
        }
        catch (error) {
            return JSON.parse(JSON.stringify(error));
        }
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(costumer_1.Costumer),
    __metadata("design:type", typeorm_2.Repository)
], CostumerService.prototype, "costumerRepo", void 0);
CostumerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], CostumerService);
exports.CostumerService = CostumerService;
//# sourceMappingURL=costumer.service.js.map