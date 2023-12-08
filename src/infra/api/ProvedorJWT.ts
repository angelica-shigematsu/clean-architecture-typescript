import jwt from 'jsonwebtoken'

export default class ProvedorJWT {
  constructor(private secret: string) {}

  createToken(data: string | object): string {
    return jwt.sign(data, this.secret, {
      expiresIn: "1d"
    })
  }
}