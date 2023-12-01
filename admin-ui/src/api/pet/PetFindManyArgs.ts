import { PetWhereInput } from "./PetWhereInput";
import { PetOrderByInput } from "./PetOrderByInput";

export type PetFindManyArgs = {
  where?: PetWhereInput;
  orderBy?: Array<PetOrderByInput>;
  skip?: number;
  take?: number;
};
