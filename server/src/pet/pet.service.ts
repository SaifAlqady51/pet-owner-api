import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PetServiceBase } from "./base/pet.service.base";

@Injectable()
export class PetService extends PetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
