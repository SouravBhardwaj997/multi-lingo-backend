import { z } from "zod";
import { Request, Response, NextFunction } from "express";
import { SignupInput } from "../schemas/auth.schema";
export const validate =
  (schema: z.Schema) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        error: result.error.flatten(),
      });
    }

    req.body = result.data;
    next();
  };
