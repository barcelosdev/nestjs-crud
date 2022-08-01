"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CostumerMigration1659139852450 = void 0;
const typeorm_1 = require("typeorm");
class CostumerMigration1659139852450 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "address",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "cep",
                    type: "varchar",
                },
                {
                    name: "street",
                    type: "varchar",
                },
                {
                    name: "number",
                    type: "varchar",
                },
                {
                    name: "district",
                    type: "varchar",
                },
                {
                    name: "city",
                    type: "varchar",
                },
                {
                    name: "uf",
                    type: "varchar",
                },
            ]
        }), true);
        await queryRunner.createIndex("costumer", new typeorm_1.TableIndex({
            name: "IDX_ADDRESS_NAME",
            columnNames: ["name"]
        }));
        await queryRunner.createTable(new typeorm_1.Table({
            name: "costumer",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "email",
                    type: "varchar",
                },
                {
                    name: "createdAt",
                    type: "varchar",
                },
                {
                    name: "address_id",
                    type: "uuid"
                }
            ],
        }), true);
        await queryRunner.addColumn("costumer", new typeorm_1.TableColumn({
            name: "address_id",
            type: "uuid",
        }));
        await queryRunner.createForeignKey("costumer", new typeorm_1.TableForeignKey({
            columnNames: ["address_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "address",
            onDelete: "CASCADE",
        }));
    }
    async down(queryRunner) {
        const table = await queryRunner.getTable("costumer");
        const foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf("address_id") !== null);
        await queryRunner.dropForeignKey("costumer", foreignKey);
        await queryRunner.dropColumn("costumer", "address_id");
        await queryRunner.dropTable("costumer");
        await queryRunner.dropIndex("address", "IDX_ADDRESS_CEP");
        await queryRunner.dropTable("address");
    }
}
exports.CostumerMigration1659139852450 = CostumerMigration1659139852450;
//# sourceMappingURL=1659139852450-CostumerMigration.js.map