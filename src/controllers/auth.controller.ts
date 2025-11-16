import { Request, Response } from "express";
import { SignupInput } from "../schemas/auth.schema";

export function login(req: Request, res: Response) {
  return res.json({ message: "login" });
}

export function signup(req: Request, res: Response) {
  try {
    const { email, fullName, password } = req.body as SignupInput;

    return res.json({ message: "signup" });
  } catch (error) {}
}
export function logout(req: Request, res: Response) {
  return res.json({ message: "login" });
}
