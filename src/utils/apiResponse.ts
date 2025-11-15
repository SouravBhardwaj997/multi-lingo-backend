import { Response } from "express";
import { ErrorResponse, SuccessResponse } from "../types/api";

export default class ApiResponse {
  static success<T>(
    res: Response,
    message: string,
    data?: T,
    statusCode: number = 200
  ) {
    const response: SuccessResponse<T> = {
      success: true,
      message,
      data,
    };
    return res.status(statusCode).json(response);
  }
  static error(
    res: Response,
    message: string,
    statusCode: number = 400,
    type: string = "ERROR",
    details: string[] | null = null
  ) {
    const response: ErrorResponse = {
      success: false,
      message,
      error: {
        type,
        details,
      },
    };

    return res.status(statusCode).json(response);
  }
}
