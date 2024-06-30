// server/src/routes/authRoutes.js
import express from "express";
import { RegisterUser } from "../controllers/logIn/registerController.js";
import { LoginUser } from "../controllers/logIn/logInController.js";
import { logOutUser } from "../controllers/logIn/logOutController.js";
import { protectedRoute } from "../token/protectedRoute.js";
import { getUserAfterTokens } from "../token/getUserAfterTokens.js";
const router = express.Router();
router.post("/Register", RegisterUser);
router.post("/auth", LoginUser);
router.post("/logout", logOutUser);
router.get("/protectedRoute", protectedRoute, getUserAfterTokens);

export default router;
