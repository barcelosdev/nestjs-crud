import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey, TableIndex } from "typeorm"

export class costumer1659098952709 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
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
            }),
            true,
        )

        await queryRunner.createIndex(
            "costumer",
            new TableIndex({
                name: "IDX_ADDRESS_CEP",
                columnNames: ["cep"]
            })
        )

        await queryRunner.createTable(
            new Table({
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
                ],
            }),
            true,
        )

        await queryRunner.addColumn(
            "costumer",
            new TableColumn ({
                name: "address_id",
                type: "uuid"
            })
        )

        await queryRunner.createForeignKey (
            "costumer",
            new TableForeignKey({
                columnNames: ["address_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "address",
                onDelete: "CASCADE"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("costumer")
        const foreignKey = table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("address_id") !== null,
        )
        await queryRunner.dropForeignKey("costumer", foreignKey)
        await queryRunner.dropColumn("costumer", "address_id")
        await queryRunner.dropTable("costumer")
        await queryRunner.dropIndex("address", "IDX_ADDRESS_CEP")
        await queryRunner.dropTable("address")
    }
}
