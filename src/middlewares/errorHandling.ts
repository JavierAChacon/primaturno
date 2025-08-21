import type {
  Request,
  Response,
  ErrorRequestHandler,
  NextFunction,
} from "express";

const errorHandling: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
};

export default errorHandling;
