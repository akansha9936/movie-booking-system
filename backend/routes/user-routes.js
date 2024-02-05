// import express from "express";
// import { getAllUsers } from "../controllers/user-controller.js";
// import { signup } from '../controllers/user-controller.js';

// const userRouter = express.Router();

// userRouter.get("/",getAllUsers);
// userRouter.post("/signup", signup);

// export default userRouter;



// ------ start from here ------


import express from "express";
import {
  deleteUser,
  getAllUsers,
  getBookingsOfUser,
  getUserById,
  login,
  signup,
  updateUser,
} from "../controllers/user-controller.js";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/signup", signup);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.post("/login", login);
userRouter.get("/bookings/:id", getBookingsOfUser);

export default userRouter;
