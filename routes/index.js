import { Router } from "express";
import centerRoutes from "./centers.js";

const router = Router();

router.use("/centers", centerRoutes);

export default router;
