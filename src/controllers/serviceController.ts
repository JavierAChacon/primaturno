import {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
} from "../models/serviceModel.js";
import type { NextFunction, Request, Response } from "express";
import type { CreateService, UpdateService } from "../types/service.js";
import type { Service } from "@prisma/client";
import handleResponse from "../utils/handleResponse.js";

export const createServiceController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const serviceData: CreateService = req.body;

    const { name, price, description } = serviceData;

    if (!name || name.trim().length === 0) {
      return handleResponse(res, 400, "El nombre es requerido");
    }

    if (name.length > 100) {
      return handleResponse(
        res,
        400,
        "El nombre no puede superar 100 caracteres"
      );
    }

    if (name.length < 3) {
      return handleResponse(
        res,
        400,
        "El nombre debe tener al menos 3 caracteres"
      );
    }

    if (price === null || price === undefined) {
      return handleResponse(res, 400, "El precio es requerido");
    }

    const parsedPrice = Number(price);

    if (isNaN(parsedPrice)) {
      return handleResponse(res, 400, "El precio debe ser un número");
    }

    if (parsedPrice < 0) {
      return handleResponse(res, 400, "El precio debe ser un número positivo");
    }

    if (description && description.length > 255) {
      return res
        .status(400)
        .json({ message: "La descripción no puede superar 255 caracteres" });
    }

    if (description && description.length < 10) {
      return handleResponse(
        res,
        400,
        "La descripción debe tener al menos 10 caracteres"
      );
    }

    const newService: Service = await createService(serviceData);
    handleResponse(res, 201, "Servicio creado exitosamente", newService);
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
    handleResponse(res, 200, "Servicios obtenidos exitosamente", services);
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
    const serviceId = String(req.params.id);

    if (serviceId === null || serviceId === undefined) {
      return handleResponse(
        res,
        400,
        "El ID es requerido y debe ser un número válido"
      );
    }

    const service: Service | null = await getServiceById(serviceId);

    if (!service) {
      return handleResponse(res, 404, "Servicio no encontrado");
    }

    handleResponse(res, 200, "Servicio obtenido exitosamente", service);
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
    const serviceId = String(req.params.id);

    if (serviceId === null || serviceId === undefined) {
      return handleResponse(
        res,
        400,
        "El ID es requerido y debe ser un número válido"
      );
    }

    const serviceData: UpdateService = req.body;
    if (!serviceData || Object.keys(serviceData).length === 0) {
      return handleResponse(
        res,
        400,
        "Debes enviar al menos un campo para actualizar"
      );
    }

    if (serviceData.price !== undefined || serviceData.price !== null) {
      const parsedPrice = Number(serviceData.price);

      if (isNaN(parsedPrice)) {
        return handleResponse(res, 400, "El precio debe ser un número");
      }
      if (parsedPrice < 0) {
        return handleResponse(
          res,
          400,
          "El precio debe ser un número positivo"
        );
      }
    }

    if (
      typeof serviceData.name === "string" &&
      serviceData.name.trim().length === 0
    ) {
      return handleResponse(res, 400, "El nombre no puede estar vacío");
    }

    if (
      typeof serviceData.description === "string" &&
      serviceData.description.length > 255
    ) {
      return handleResponse(
        res,
        400,
        "La descripción no puede superar 255 caracteres"
      );
    }

    const updatedService = await updateService(serviceId, serviceData);

    if (!updatedService) {
      return handleResponse(res, 404, "Servicio no encontrado");
    }

    handleResponse(
      res,
      200,
      "Servicio actualizado exitosamente",
      updatedService
    );
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
    const serviceId = String(req.params.id);

    if (serviceId === null || serviceId === undefined) {
      return handleResponse(
        res,
        400,
        "El ID es requerido y debe ser un número válido"
      );
    }

    const deletedService = await deleteService(serviceId);

    if (!deletedService) {
      return handleResponse(res, 404, "Servicio no encontrado");
    }

    handleResponse(res, 200, "Servicio eliminado exitosamente", deletedService);
  } catch (error) {
    next(error);
  }
};
