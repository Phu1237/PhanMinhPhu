import express from "express";
import { BaseController } from "./BaseController";
import ResourceNotFoundException from "../exceptions/ResourceNotFoundException";

export default class CustomerController extends BaseController {
  getAll = async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const filter: any = {};
      if (request.query.name) {
        filter.name = { contains: request.query.name };
      }
      const customers = await this.prisma.customer.findMany({
        where: filter,
      });
      response.json({
        data: customers,
      });
    } catch (error) {
      next(error);
    }
  };

  getOne = async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const customer = await this.prisma.customer.findUnique({
        where: {
          id: Number.parseInt(request.params.id),
        },
      });
      if (!customer) {
        next(new ResourceNotFoundException());
        return;
      }

      response.json({
        data: customer,
      });
    } catch (error) {
      next(error);
    }
  };

  add = async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    const reqBody = request.body;

    try {
      const customer = await this.prisma.customer.create({
        data: {
          name: reqBody.name,
        },
      });

      response.json({
        data: customer,
      });
    } catch (error) {
      next(error);
    }
  };

  update = async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    const reqBody = request.body;

    try {
      const id = parseInt(request.params.id);
      const count = await this.prisma.customer.count({
        where: {
          id: id,
        },
      });
      if (count === 0) {
        next(new ResourceNotFoundException());
        return;
      }

      const customer = await this.prisma.customer.update({
        where: {
          id: id,
        },
        data: {
          name: reqBody.name,
        },
      });

      response.json({
        data: customer,
      });
    } catch (error) {
      next(error);
    }
  };

  delete = async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const id = parseInt(request.params.id);
      const count = await this.prisma.customer.count({
        where: {
          id: id,
        },
      });
      if (count === 0) {
        next(new ResourceNotFoundException());
        return;
      }

      const customer = await this.prisma.customer.delete({
        where: {
          id: id,
        },
      });

      response.json({
        data: customer,
      });
    } catch (error) {
      next(error);
    }
  };
}
