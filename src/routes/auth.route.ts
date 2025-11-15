import { Router } from "express";
import { login, logout, signup } from "../controllers/auth.controller";
import { validate } from "../middlewares/validate";
import { signupSchema } from "../schemas/auth.schema";

const router = Router();

router.get("/login", login);
router.get("/signup", validate(signupSchema), signup);
router.get("/logout", logout);

export default router;
