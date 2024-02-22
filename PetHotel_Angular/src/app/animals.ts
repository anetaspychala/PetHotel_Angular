export interface Animal {

  id: number;
  type: string;
  weight: number;
  name: string;
  sex: string;
 // ownerId: number;
}
export interface AuthResponse {
  jwtToken: string;
}
