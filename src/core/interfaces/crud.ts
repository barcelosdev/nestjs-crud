export interface CRUD<Object> {
    create(object: Object): Promise<Object>
    listAll(): Promise<Object[]>
    update(id: string, body: Object): Promise<Object>
    findById(id: string): Promise<Object>
    delete(id: string): Promise<Object>
}