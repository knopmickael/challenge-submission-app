import { RegisterApplyer } from "./register-applyer";
import { ApplyersRepository } from "../infra/repositories/in-memory/applyers-repository";

describe('register applyer usecase', () => {
  it('should create a applyer', () => {

    const sut = new RegisterApplyer(new ApplyersRepository());

    const res = sut.exec({
      name: "Foo Bar",
      email: "foo@bar.com"
    });

    expect(res).toBeTruthy();
  });
});