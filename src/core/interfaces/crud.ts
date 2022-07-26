interface CRUD<Object> {
    create(object: Object)
    update(id: any, properties: any)
    findById(object: Object)
    delete(object: Object)
}