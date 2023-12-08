// import UserRepositoryInMemory from "../adapters/mock/UserRepositoryInMemory";
import InveterSenhaCripto from "../infra/auth/TransformPasswordCrypt";
import UserRepositoryBD from "../infra/db/UserRepositoryBD";
import UserCaseUse from "../usecase/UserCaseUse";


describe("User", () => {
  it("should be created user", async() => {

    // const repository = new UserRepositoryInMemory()

    const repository = new UserRepositoryBD()
    const provedorCrypt = new InveterSenhaCripto()
    
    const caseUse = new UserCaseUse(repository, provedorCrypt)

    const user = {
      id: "1",
      name: "Angélica",
      email: "user@example.com",
      password: "12345678"
    }
    const userCreated = await caseUse.create(user)

    expect(userCreated).toHaveProperty('created')
  })
})