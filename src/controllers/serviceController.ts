import {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
} from "../models/serviceModel.js";
import type { NextFunction, Request, Response } from "express";
import type {
  CreateService,
  Service,
  UpdateService,
} from "../types/service.js";
import handleResponse from "../utils/handleResponse.js";

export const createServiceController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const serviceData: CreateService = req.body;

    const newService: Service = await createService(serviceData);
    handleResponse(res, 201, "Service created successfully", newService);
  } catch (error) {
    next(error);
  }
};

export const getAllServicesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const services: Service[] = await getAllServices();
    handleResponse(res, 200, "Services fetched successfully", services);
  } catch (error) {
    next(error);
  }
};

export const getServiceByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const serviceId = Number(req.params.id);
    const service: Service | null = await getServiceById(serviceId);

    if (!service) {
      return handleResponse(res, 404, "Service not found");
    }

    handleResponse(res, 200, "Service fetched successfully", service);
  } catch (error) {
    next(error);
  }
};

export const updateServiceController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const serviceId = Number(req.params.id);
    const serviceData: UpdateService = req.body;

    const updatedService = await updateService(serviceId, serviceData);

    if (!updatedService) {
      return handleResponse(res, 404, "Service not found");
    }

    handleResponse(res, 200, "Service updated successfully", updatedService);
  } catch (error) {
    next(error);
  }
};

export const deleteServiceController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const serviceId = Number(req.params.id);
    const deletedService = await deleteService(serviceId);

    if (!deletedService) {
      return handleResponse(res, 404, "Service not found");
    }

    handleResponse(res, 200, "Service deleted successfully", deletedService);
  } catch (error) {
    next(error);
  }
};
