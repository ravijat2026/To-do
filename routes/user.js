import express from "express";
import { User } from "../models/user.js";
import { getMyProfile, login, logout, register } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

  router.post("/new",register);
  router.post("/login",login);
  router.get("/logout",logout);

  // router.get("/userid/special",special);

  router
    .route("/me")
    .get(isAuthenticated , getMyProfile)
    // .put(updateUser)
    // .delete(deleteUser);

export default router;