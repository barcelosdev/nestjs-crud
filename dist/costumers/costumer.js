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
exports.Costumer = void 0;
const address_1 = require("../address/address");
const typeorm_1 = require("typeorm");
const uuid = require("uuid");
let Costumer = class Costumer {
    constructor(name, email, address, id) {
        this.id = id !== null && id !== void 0 ? id : uuid.v4();
        this.name = name;
        this.email = email;
        this.address = address;
        this.createdAt = new Date().toLocaleString();
    }
    get _id() { return this.id; }
    get _name() { return this.name; }
    set _name(name) { this.name = name; }
    get _email() { return this.email; }
    set _email(email) { this.email = email; }
    get _createdAt() { return this.createdAt; }
    set _createdAt(createdAt) { this.createdAt = createdAt; }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Costumer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Costumer.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Costumer.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Costumer.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => address_1.Address),
    (0, typeorm_1.JoinColumn)({ name: "address_id" }),
    __metadata("design:type", address_1.Address)
], Costumer.prototype, "address", void 0);
Costumer = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, String, address_1.Address, String])
], Costumer);
exports.Costumer = Costumer;
//# sourceMappingURL=costumer.js.map