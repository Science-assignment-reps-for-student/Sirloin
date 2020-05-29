import * as core from 'express-serve-static-core';

import cors from 'cors'
import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import appConfig from '../config/appConfig'
import router from './apis'
import connectDB from './extensions/connectDatabase'


const registerApis = (app: core.Express): void => {
    app.use('/sirloin', router)
}

const registerExtensions = (app: core.Express): void => {
    app.use(compression());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(morgan(appConfig.logLevel))
    app.use(cors(appConfig.cors))
    connectDB()
}

const createApp = (): core.Express => {
    const app = express()

    registerExtensions(app)
    registerApis(app)
    
    return app
}

export default createApp()