export default interface UserType {
  name: string;
  // userId: string;
  _id?: string;
  email: string;
  iat: number;
  exp: number;
  isAdmin?: boolean;
}
