import { DataSource } from "typeorm"
import config from "./database.config"

const dataSource = new DataSource(config)

export default dataSource
