import express from "express"
import Maintenance from './apis'

const app = express()

app.get('/maintenance', require(Maintenance))