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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CostumerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const costumer_1 = require("./costumer");
const typeorm_2 = require("typeorm");
let CostumerService = class CostumerService {
    constructor(repository) {
        this.repository = repository;
    }
    create(body) {
        try {
            const newCostumer = new costumer_1.Costumer(body['_name'], body['_email']);
            this.repository.save(newCostumer);
            return JSON.parse(JSON.stringify(newCostumer));
        }
        catch (error) {
            return JSON.parse(JSON.stringify(error));
        }
    }
    async update(body) {
        try {
            const cos = await this.findById(body['_id']);
            cos.name = body['_name'];
            cos.email = body['_email'];
            this.repository.save(cos);
            return JSON.parse(JSON.stringify(cos));
        }
        catch (error) {
            return JSON.parse(JSON.stringify(error));
        }
    }
    findById(id) {
        try {
            return this.repository.findOneBy({ id });
        }
        catch (error) {
            return JSON.parse(JSON.stringify(error));
        }
    }
    async listAll() {
        try {
            return await this.repository.manager.query("SELECT * FROM costumer c");
        }
        catch (error) {
            return JSON.parse(JSON.stringify(error));
        }
    }
    async delete(id) {
        try {
            const costumer = await this.findById(id);
            this.repository.remove(costumer);
        }
        catch (error) {
            return JSON.parse(JSON.stringify(error));
        }
    }
};
CostumerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(costumer_1.Costumer)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CostumerService);
exports.CostumerService = CostumerService;
//# sourceMappingURL=costumer.service.js.map