import { Router } from "express";
import { profileMe } from "../controllers/profileController";

export const profileRouter = Router();

profileRouter.get('/me', profileMe);