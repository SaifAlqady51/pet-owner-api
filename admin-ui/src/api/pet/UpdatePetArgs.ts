import { PetWhereUniqueInput } from "./PetWhereUniqueInput";
import { PetUpdateInput } from "./PetUpdateInput";

export type UpdatePetArgs = {
  where: PetWhereUniqueInput;
  data: PetUpdateInput;
};
