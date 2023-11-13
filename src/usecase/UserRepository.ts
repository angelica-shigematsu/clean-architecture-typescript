import IUser from "../entities/User"

export default interface UserRepository {
  add(user: IUser): IUser[];
  findByEmail(email: string): Promise<IUser | null> 
  findById(id: string): Promise<IUser | null>
}