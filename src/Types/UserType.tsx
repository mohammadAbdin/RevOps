export default interface UserType {
  name: string;
  _id?: string;
  email: string;
  iat: number;
  exp: number;
  isAdmin?: boolean;
  notification?: string[];
}
