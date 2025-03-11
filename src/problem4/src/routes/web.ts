import express from "express";

const route = express.Router();

route.get("/", (request: express.Request, response: express.Response) => {
  response.send("Application is running");
});

export default route;
