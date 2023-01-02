import { RegisterApplyer } from "./register-applyer";
import { ApplyersRepository } from "../infra/repositories/in-memory/applyers-repository";

describe('register applyer usecase', () => {
  it('should create a applyer', async () => {

    const sut = new RegisterApplyer(new ApplyersRepository());

    const res = await sut.exec({
      name: "Foo Bar",
      email: "foo@bar.com"
    });

    expect(res).toBeTruthy();
  });
});