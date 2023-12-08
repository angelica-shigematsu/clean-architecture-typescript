import UserRepository from './UserRepository'
import IUser from '../entities/User'
import CaseUse from './CaseUse'
import ProvedorCryptRepository from './ProvedorCryptRepository'
import MessageError from './MessageError'

// const regExEmail = /^[^@ ,;{}\[\]$!%&*]+@[^@ \d ,;{}\[\]$!%&*]+\.[^@ \d ,;{}\[\]$!%&*]+/i

// const regExHasNumber= /[\d]+/

export default class UserCaseUse implements CaseUse<IUser, IUser | null> {

  constructor(
    private userRepository: UserRepository,
    private provedorCrypt: ProvedorCryptRepository
  ) {}

  async create(user: IUser): Promise<IUser> {
    const date = new Date()

    const userExits = await this.userRepository.findByEmail(user.email)

    const passworCrypt = this.provedorCrypt.crypt(user.password)

    if (userExits) throw new MessageError('', 400, `User already exists: ${user.email}`)

    const newUser = {
      name: user.name,
      email: user.email,
      password: passworCrypt,
      created: date
    }

    return this.userRepository.add(newUser)
  }

  async getUserById(userId: string): Promise<IUser | null> {

    const userExits = this.userRepository.findById(userId) ??  null

    if (!userExits) throw new Error("User does not find")
    
    return userExits
  }
  
}

// if (!user) throw new Error("User do not exits")

    // if (!user.name ||user.name.length < 6 || regExHasNumber.test(user.name))
    //   throw new Error("Name invalid")

    // if (!user.email || !regExEmail.test(user.email)) 
    //   throw new Error("Email invalid")

    // if (user?.password)
    //   throw new Error("Password invalid")
  // }