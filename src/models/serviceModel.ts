import { PrismaClient } from "@prisma/client";
import type { Service } from "@prisma/client";
import type { CreateService, UpdateService } from "../types/service.js";

const prisma = new PrismaClient();

export async function createService(data: CreateService): Promise<Service> {
  return prisma.service.create({ data });
}

export async function getAllServices(): Promise<Service[]> {
  return prisma.service.findMany();
}

export async function getServiceById(id: string): Promise<Service | null> {
  return prisma.service.findUnique({ where: { id } });
}

export async function updateService(
  id: string,
  data: UpdateService
): Promise<Service | null> {
  return prisma.service.update({ where: { id }, data });
}

export async function deleteService(id: string): Promise<Service | null> {
  return prisma.service.delete({ where: { id } });
}
