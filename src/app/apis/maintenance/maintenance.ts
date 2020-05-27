import { Request, Response } from 'express'


export const Maintenance = (req: Request, res: Response) => {
    res.status(200).send({"status":"OK"})
  };