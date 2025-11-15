import { Request, Response } from "express";

export function login(req: Request, res: Response) {
  return res.json({ message: "login" });
}

export function signup(req: Request, res: Response) {
  try {
    const { email } = req.body;
    return res.json({ message: "signup" });
  } catch (error) {}
}
export function logout(req: Request, res: Response) {
  return res.json({ message: "login" });
}
