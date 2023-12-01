import { Module } from "@nestjs/common";
import { PetModuleBase } from "./base/pet.module.base";
import { PetService } from "./pet.service";
import { PetResolver } from "./pet.resolver";

@Module({
  imports: [PetModuleBase],
  providers: [PetService, PetResolver],
  exports: [PetService],
})
export class PetModule {}
