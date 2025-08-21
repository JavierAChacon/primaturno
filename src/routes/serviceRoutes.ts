import express from "express";
import {
  createServiceController,
  getAllServicesController,
  getServiceByIdController,
  updateServiceController,
  deleteServiceController,
} from "../controllers/serviceController.js";

const router = express.Router();

router.route("/services").post(createServiceController).get(getAllServicesController);

router
  .route("/services/:id")
  .get(getServiceByIdController)
  .put(updateServiceController)
  .delete(deleteServiceController);

export default router;
