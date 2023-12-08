import ProvedorCryptRepository from  '../../usecase/ProvedorCryptRepository'
import bcrypt from 'bcrypt'

export default class TransformPasswordCrypt implements ProvedorCryptRepository {
  crypt(password: string): string {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
  }

  comparatePassword(password: string, passwordCrypt: string): boolean {
    return bcrypt.compareSync(password, passwordCrypt)
  }
}