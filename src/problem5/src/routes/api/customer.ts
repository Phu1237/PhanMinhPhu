import express from "express";
import CustomerController from "../../controllers/CustomerController";

const route = express.Router();

const Controller = new CustomerController();

// @desc Get all customers
// @route GET /api/customers
route.get("/", Controller.getAll);

// @desc Get a single customer by ID
// @route GET /api/customers/:id
route.get("/:id", Controller.getOne);

// @desc Add a new customer
// @route POST /api/customers
route.post("/", Controller.add);

// @desc Update customer information
// @route PUT /api/customers/:id
route.put("/:id", Controller.update);

// @desc Delete a customer by ID
// @route DELETE /api/customers/:id
route.delete("/:id", Controller.delete);

export default route;
