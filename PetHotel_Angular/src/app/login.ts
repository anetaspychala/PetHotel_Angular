import { Role } from "./Role";

export interface Login {
  login: string;
  password: string;
  role: Role;
}
