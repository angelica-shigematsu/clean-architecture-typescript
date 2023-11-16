import dotenv from 'dotenv'
import express from 'express'
import UserCaseUse from './usecase/UserCaseUse';
import UserRepositoryBD from './infra/db/UserRepositoryBD';
import CreateUserController from './infra/api/CreateUserController';

dotenv.config()

const app = express();

app.use(express.json())

app.use(express.urlencoded({extended: true}))

const repositoryUser = new UserRepositoryBD()
const userCase = new UserCaseUse(repositoryUser)

new CreateUserController(app, userCase)

app.listen(process.env.API_PORT, () => {
  console.log('listening on port ' + process.env.API_PORT)
})
