import type { Response } from "express";

const handleResponse = (
  res: Response,
  status: number,
  message: string | null = null,
  data: any = null
) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export default handleResponse;
