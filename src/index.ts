import dotenv from 'dotenv'
import express from 'express'
import UserCaseUse from './usecase/UserCaseUse';
import UserRepositoryBD from './infra/db/UserRepositoryBD';
import CreateUserController from './infra/api/CreateUserController';
import LoginUserCaseUse from './usecase/LoginUserCaseUse';
import TransofrmPasswordCrypt from './infra/auth/TransformPasswordCrypt';
import LoginUserController from './infra/api/LoginUserController';

dotenv.config()

const app = express();

app.use(express.json())

app.use(express.urlencoded({extended: true}))

const repositoryUser = new UserRepositoryBD()
const passwordCrypt = new TransofrmPasswordCrypt()
const userCase = new UserCaseUse(repositoryUser, passwordCrypt)

const loginCase = new LoginUserCaseUse(repositoryUser, passwordCrypt)

new CreateUserController(app, userCase)
new LoginUserController(app, loginCase)


app.listen(process.env.API_PORT, () => {
  console.log('listening on port ' + process.env.API_PORT)
})
