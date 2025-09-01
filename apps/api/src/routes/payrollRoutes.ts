import { Router } from 'express';
import {
  createPayroll,
  getPayroll,
  updatePayroll,
  deletePayroll,
  getAllPayrolls,
} from '../controllers/payrollController';

const router = Router();

router.post('/payroll', createPayroll);
router.get('/payroll/:id', getPayroll);
router.put('/payroll/:id', updatePayroll);
router.delete('/payroll/:id', deletePayroll);
router.get('/payrolls', getAllPayrolls);

export default router;