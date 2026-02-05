import express from 'express';
import { agentRegister, loginAgent, getAgentProfile } from '../controllers/agent.controller.js';

const router = express.Router();

router.post("/register", agentRegister);
router.post("/login", loginAgent);
router.get("/profile/:id", getAgentProfile);

export default router;