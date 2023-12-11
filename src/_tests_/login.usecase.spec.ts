import UserRepositoryBD from "../infra/db/UserRepositoryBD"
import InveterSenhaCripto from "../infra/auth/TransformPasswordCrypt";
import LoginUser from "../usecase/LoginUserCaseUse";

describe("User", () => {
  it("should be login", async() => {

    // const repository = new UserRepositoryInMemory()

    const repository = new UserRepositoryBD()

    const provedorCrypt = new InveterSenhaCripto()

    const caseUse = new LoginUser(repository, provedorCrypt)

    const userLogin = {
      email: "user@example.com",
      password: "12345678"
    }

    const userCreated = await caseUse.create(userLogin)

    expect(typeof(userCreated)).toBe("object")
  })
})