export interface CreateService {
  name: string;
  description?: string | null;
  price: number;
}

export interface Service {
  id: number;
  name: string;
  description: string | null;
  price: number;
  created_at: Date;
  updated_at: Date;
}

export interface UpdateService {
  id: number;
  name?: string;
  description?: string | null;
  price?: number;
}
