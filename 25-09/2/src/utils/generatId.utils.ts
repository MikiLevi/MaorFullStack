import { v4 as uuidv4 } from "uuid";
export function createUniqueId()
{
  const newId = uuidv4();
  return newId;
}
