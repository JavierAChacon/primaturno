import pool from "../config/db.js";
import type {
  CreateService,
  UpdateService,
  Service,
} from "../types/service.js";

export const createService = async (
  serviceData: CreateService
): Promise<Service> => {
  const { name, description, price } = serviceData;
  const { rows } = await pool.query(
    "INSERT INTO services (name, description, price) VALUES ($1, $2, $3) RETURNING *",
    [name, description, price]
  );
  return rows[0];
};

export const getAllServices = async (): Promise<Service[]> => {
  const { rows } = await pool.query("SELECT * FROM services");
  return rows;
};

export const getServiceById = async (id: number): Promise<Service | null> => {
  const { rows } = await pool.query("SELECT * FROM services WHERE id = $1", [
    id,
  ]);
  return rows[0] || null;
};

export const updateService = async (id: number, serviceData: UpdateService) => {
  const { name, description, price } = serviceData;
  const { rows } = await pool.query(
    `UPDATE services
     SET name = $1, description = $2, price = $3, updated_at = NOW()
     WHERE id = $4
     RETURNING *`,
    [name, description, price, id]
  );
  return rows[0];
};

export const deleteService = async (id: number) => {
  const { rows } = await pool.query(
    "DELETE FROM services WHERE id = $1 RETURNING *",
    [id]
  );
  return rows[0];
};
