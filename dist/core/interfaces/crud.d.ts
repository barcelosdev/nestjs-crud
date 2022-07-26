interface CRUD<Object> {
    create(object: Object): any;
    update(id: any, properties: any): any;
    findById(object: Object): any;
    delete(object: Object): any;
}
