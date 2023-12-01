import * as graphql from "@nestjs/graphql";
import { PetResolverBase } from "./base/pet.resolver.base";
import { Pet } from "./base/Pet";
import { PetService } from "./pet.service";

@graphql.Resolver(() => Pet)
export class PetResolver extends PetResolverBase {
  constructor(protected readonly service: PetService) {
    super(service);
  }
}
