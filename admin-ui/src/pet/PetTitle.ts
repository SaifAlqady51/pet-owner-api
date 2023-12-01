import { Pet as TPet } from "../api/pet/Pet";

export const PET_TITLE_FIELD = "name";

export const PetTitle = (record: TPet): string => {
  return record.name?.toString() || String(record.id);
};
