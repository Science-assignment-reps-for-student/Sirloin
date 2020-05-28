import { Maintenance } from './maintenance/maintenance';

import * as express from "express"

const router = express.Router();

router.use('/maintenance', Maintenance)

export default router