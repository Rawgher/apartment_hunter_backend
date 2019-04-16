import { Router } from "express";
// Import index action from apartments controller
import { index } from "./controllers/apartments";

// Initialize the router
const router = Router();

// Handle /apartments.json route with index action from apartments controller
router.route("/apartments.json").get(index);

export default router;
