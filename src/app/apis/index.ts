import { MaintenanceCheck } from './maintenance/maintenance';
import * as express from 'express'

const router = express.Router();
router.use('/maintenance', MaintenanceCheck)

export default router