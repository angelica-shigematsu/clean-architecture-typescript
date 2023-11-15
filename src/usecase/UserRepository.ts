import IUser from "../entities/User"

export default interface UserRepository {
  add(user: IUser): Promise<IUser>;
  findByEmail(email: string): Promise<IUser | null> 
  findById(id: string): Promise<IUser | null>
}