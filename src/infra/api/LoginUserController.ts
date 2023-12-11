import { Express } from 'express'
import LoginUserCaseUse from '../../usecase/LoginUserCaseUse'
import { Request, Response } from 'express'
import MessageError from '../../usecase/MessageError'
import ProvedorJWT from './ProvedorJWT'
import dotenv from 'dotenv'

dotenv.config()

export default class LoginUserController {
  constructor(
    server: Express,
    caseUse: LoginUserCaseUse 
  ) {
    server.post('/api/users/login', async(req: Request, res: Response): Promise<void> => {
      try {
        const user = await caseUse.create({
          email: req.body.email,
          password: req.body.password
        })
        res.status(201).json({
          user,
          token: new ProvedorJWT(String(process.env.JWT_SECRET)).createToken(user)
        })
      }catch(error) {
        if (error instanceof MessageError) {
          res.status(error.status).json(error.message)
        }
        res.status(500).json("Internal Server Error")
      }     
    })
  }
 } 