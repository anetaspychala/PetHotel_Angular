import {Role} from "./Role";

export interface User{
  id:number;
  login: string;
  email: string;
  password: string;
  role: Role;
}
export interface AuthResponse {
  jwtToken: string;
}

