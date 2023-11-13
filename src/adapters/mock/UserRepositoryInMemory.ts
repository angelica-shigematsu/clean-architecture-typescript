import IUser from "../../entities/User";
import UserRepository from "../../usecase/UserRepository";

export default class UserRepositoryInMemory implements UserRepository {
  private static userRepository: IUser[] = []

  add(user: IUser){
    UserRepositoryInMemory.userRepository.push(user)
    return UserRepositoryInMemory.userRepository
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const userRepository = UserRepositoryInMemory.userRepository

    return userRepository.find(value => value.email === email) ?? null
  }

  async findById(id: string): Promise<IUser | null> {
    const userRepository = UserRepositoryInMemory.userRepository

    return userRepository.find(userId => userId.id === id) ?? null 
  }
}