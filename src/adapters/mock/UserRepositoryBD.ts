import IUser from "../../entities/User";
import UserRepository from "../../usecase/UserRepository";

import prisma from '../../infra/PrismaClient'

export default class UserRepositoryBD implements UserRepository{
  // private static userRepository: IUser[] = []

  async add(user: IUser): Promise<IUser>{

    const userData= {
      data: {
        ...user,
        created: new Date()
      }
    }

    const userCreated = await prisma.user.create(userData)

    return userCreated
    // UserRepositoryInMemory.userRepository.push(user)
    // return UserRepositoryInMemory.userRepository
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const userRepository = await prisma.user.findUnique({
      where: { email }
    })

    if (userRepository) return null

    return userRepository
    // UserRepositoryInMemory.userRepository

    // return userRepository.find(value => value.email === email) ?? null
  }

  async findById(id: string): Promise<IUser | null> {
    const findId = await prisma.user.findUnique({
      where: { id }
    })
  
    if (!findId) return null

    return findId
   
    // UserRepositoryInMemory.userRepository
    //return userRepository.find(userId => userId.id === id) ?? null 

  }
}