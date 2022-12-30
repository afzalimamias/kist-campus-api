import { Router } from "express";

import noticeRoute from "./notice/noticeRoute.js";
import notificationRoute from "./notification/notificationRoute.js";
import authRoute from "./auth/authRoute.js";
import userRoute from "./users/userRoute.js";

const router = Router();

router.use("/auth", authRoute);
router.use("/user", userRoute);
router.use("/notice", noticeRoute);
router.use("/notification", notificationRoute);

export default router;
