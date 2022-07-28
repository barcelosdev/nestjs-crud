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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CostumerController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const costumer_service_1 = require("./costumer.service");
let CostumerController = class CostumerController {
    constructor(costumerService) {
        this.costumerService = costumerService;
    }
    async createCostumer(body) {
        return await this.costumerService.create(body);
    }
    async update(body) {
        return await this.costumerService.update(body);
    }
    async findById(body) {
        return await this.costumerService.findById(body);
    }
    async listAll() {
        return await this.costumerService.listAll();
    }
    async delete(body) {
        return await this.costumerService.delete(body);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CostumerController.prototype, "createCostumer", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CostumerController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CostumerController.prototype, "findById", null);
__decorate([
    (0, common_1.Get)('/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CostumerController.prototype, "listAll", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CostumerController.prototype, "delete", null);
CostumerController = __decorate([
    (0, swagger_1.ApiTags)('costumer'),
    (0, common_1.Controller)('costumer'),
    __metadata("design:paramtypes", [typeof (_a = typeof costumer_service_1.CostumerService !== "undefined" && costumer_service_1.CostumerService) === "function" ? _a : Object])
], CostumerController);
exports.CostumerController = CostumerController;
//# sourceMappingURL=costumer.controller.js.map