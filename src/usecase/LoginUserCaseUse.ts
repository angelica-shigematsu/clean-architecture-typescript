import IUser from "../entities/User";
import CaseUse from "./CaseUse";
import MessageError from "./MessageError";
import ProvedorCryptRepository from "./ProvedorCryptRepository";
import UserRepository from "./UserRepository";

export type LoginUserInput = { 
  email: string;
  password: string;
}

export type LoginUserOutput = {
  user: IUser;
  // token: string;
}

export default class LoginUser implements CaseUse<LoginUserInput, LoginUserOutput> {
  constructor(
    private userRepository: UserRepository,
    private provedorCrypt: ProvedorCryptRepository) {}
  
  async create(input: LoginUserInput): Promise<LoginUserOutput> {
    const exitsUser = await this.userRepository.findByEmail(input.email)

    // if (!exitsUser) throw new Error('Could not find user')

    if (!exitsUser) throw new MessageError('', 400, 'Could not find user')

    const comparateEqualPassword = this.provedorCrypt.comparatePassword(
      input.password,
      exitsUser.password
    )
    if (!comparateEqualPassword) throw new MessageError('', 400, 'Password invalid')

    // if (!comparateEqualPassword) throw new Error('Password invalid')

    return {user: {...exitsUser}}
  }
}