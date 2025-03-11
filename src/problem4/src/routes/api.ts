import express from "express";
import CustomerRouter from "./api/customer";

const route = express.Router();

route.use("/customers", CustomerRouter);

export default route;
