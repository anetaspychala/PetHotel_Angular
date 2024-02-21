import {Role} from "./Role";

export interface User{
  login: string;
  email: string;
  password: string;
  role: Role;
}
export interface AuthResponse {
  jwtToken: string;
}

