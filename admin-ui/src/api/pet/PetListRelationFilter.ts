import { PetWhereInput } from "./PetWhereInput";

export type PetListRelationFilter = {
  every?: PetWhereInput;
  some?: PetWhereInput;
  none?: PetWhereInput;
};
