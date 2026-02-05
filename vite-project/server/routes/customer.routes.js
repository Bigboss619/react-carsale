import express from 'express';
import { registerCustomer, loginCustomer, getCustomerProfile } from '../controllers/customer.controller.js';

const router = express.Router();

router.post("/register", registerCustomer);
router.post("/login", loginCustomer);
router.get("/profile/:id", getCustomerProfile);

export default router;