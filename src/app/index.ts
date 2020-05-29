import express from "express";
import cors from 'cors';
import compression from 'compression';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import router from "./apis"
import { createConnection, Any, Connection, ConnectionOptions } from "typeorm";
import dbConfig from '../config/dbConfig'


const app = express()

const registerApis = (app: any): void => {
    app.use('/sirloin', router)
}

const registerExtensions = (app: any): void => {
    app.use(compression());
    app.use(bodyParser.json());
    app.use(
        bodyParser.urlencoded({
            extended: false,
        }),
    )
    app.use(morgan('morgan'))
    createConnection(dbConfig as ConnectionOptions).then(
    ).catch(error => console.log(error));
    
}

const settingApp = (app: any): any => {
    registerApis(app)
    registerExtensions(app)

    return app
}

export default settingApp(app)