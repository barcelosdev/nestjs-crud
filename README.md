
# **NestJS CRUD**
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>

### A simple CRUD with the NestJS framework focused on putting some development concepts and practices into practice.
<br>

Some practices applied here:

- DTO (Data Transfer Objects)
- External API Consume: [ViaCEP](https://viacep.com.br/)
- OO (Object Orientation) Concepts
- CRUD (Create, Read, Update and Delete)
- REST Architecture

## **Installation**

```bash
$ npm install
```

## **Running the app**

```bash
# development
$ npm run start

# watch mode
$ npm run dev

# production mode
$ npm run prod
```

## **Migrations**

Take a look at the official documentation: https://typeorm.io/migrations

### **Generate a new migration with recent database** updates  
A new migration will be generated with all the changes made to the entity annotations:
```bash
$ npm run typeorm migration:generate ./path/to/migrations/GenerateExample
```

### **Create a new migration manually**  
A new empty migration will be created where it will be necessary to write manually which changes will be made in the database:
```bash
$ npm run typeorm migration:create ./path/to/migrations/CreateExample;
```

### **Upload all migrations to the database**  
All migrations created and generated will upload all updates to the database:
```bash
$ npm run typeorm migration:run
```

### **Revert the last migration made to the database**  
The last migration executed will be undone and all queries contained in it will be reverted:
```bash
$ npm run typeorm migration:revert
```

### **View all migrations executed and not yet executed**
The terminal will show all the migrations that have been executed and that haven't been executed yet:
```bash
$ npm run typeorm migration:show
```

## License

Nest is [MIT licensed](LICENSE).
