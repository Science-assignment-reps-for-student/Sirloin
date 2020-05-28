import express from "express";
import cors from 'cors';
import compression from 'compression';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import router from "./apis"

const app = express()

const registerApis = (app: any): void => {
    app.use('/api', router)
}

const registerHooks = (app: any): void => {
}

const registerExtensions = (app: any): void => {
    app.use(compression());
    app.use(bodyParser.json());
    app.use(
        bodyParser.urlencoded({
            extended: false,
        }),
    )
    app.use(morgan('dev'))
    app.use(
        cors({
          origin: ["*"],
          methods: ['GET', 'POST', 'PUT', 'DELETE'],
          credentials: true,
        }),
    )
}

const settingApp = (app: any): any => {
    registerApis(app)
    registerHooks(app)
    registerExtensions(app)

    return app
}

export default settingApp(app)