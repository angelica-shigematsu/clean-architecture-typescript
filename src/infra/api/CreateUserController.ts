import { Express } from 'express'
import UserCaseUse from '../../usecase/UserCaseUse'
import { Request, Response } from 'express'

export default class CreateUserController {
  constructor(
    server: Express,
    caseUse: UserCaseUse 
  ) {
    server.post('/api/users/create', async(req: Request, res: Response): Promise<void> => {
      try {
        await caseUse.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        })
        res.status(201).json("User created")
      }catch(error) {
        res.status(400).json()
      }     
    })
  }
 } 