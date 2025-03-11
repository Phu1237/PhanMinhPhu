import { PrismaClient } from "@prisma/client";

export abstract class BaseController {
  public prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
}
