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
const typeorm_1 = require("typeorm");
const uuid = require("uuid");
let Costumer = class Costumer {
    constructor(name, email, id) {
        this._id = id !== null && id !== void 0 ? id : uuid.v4();
        this._name = name;
        this._email = email;
        this._createdAt = new Date().toLocaleString();
    }
    get id() { return this._id; }
    get name() { return this._name; }
    set name(name) { this._name = name; }
    get email() { return this._email; }
    set email(email) { this._email = email; }
    get createdAt() { return this._createdAt; }
    set createdAt(createdAt) { this._createdAt = createdAt; }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Costumer.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Costumer.prototype, "_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Costumer.prototype, "_email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Costumer.prototype, "_createdAt", void 0);
Costumer = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, String, String])
], Costumer);
exports.Costumer = Costumer;
//# sourceMappingURL=costumer.js.map