import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Maintenance } from '../../models/main_tenance'

export const MaintenanceCheck = async (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    try {
        const maintenanceList: Array<any> = await getRepository(Maintenance).find();
        if (maintenanceList[0].is_tenance == false) {
            res.status(202).send({"status":"Server is open :)"})
        } else {
            res.status(503).send({"status":"Server is in maintenance","finish_at":maintenanceList[0].finish_at})
        }
    } catch (e) {
        res.status(500).send({"status":e})
    }
}