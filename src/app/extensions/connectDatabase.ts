import { createConnection, ConnectionOptions } from "typeorm";
import dbConfig from '../../config/dbConfig'

const connectDatabase = () => {
    createConnection(dbConfig as ConnectionOptions).then(
    ).catch(error => console.log(error))
}

export default connectDatabase