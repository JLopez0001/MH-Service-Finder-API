import { Router } from "express";
import * as controllers from "../controllers/centers.js";

const router = Router();

//Gets all centers
router.get("/", controllers.getCenters);

//Gets specific center based on id
router.get("/:id", controllers.getCenter);

//Create a MH Center
router.post("/add-center", controllers.createCenter);

//Update specific Center
router.put("/:id", controllers.updateCenter);

//Delete specific Center
router.delete("/:id", controllers.deleteCenter);

export default router;
