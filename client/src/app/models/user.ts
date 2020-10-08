export interface UserCredentials {
  email: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserResponse {
  token: string;
  user: User;
}

export class UserPayload {
  name: string;
  email: string;
  password: string;
}
