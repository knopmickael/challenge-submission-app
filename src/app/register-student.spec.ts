import { RegisterStudent } from "./register-student";

describe('register student usecase', () => {
  it('should instantiate a student', () => {

    const sut = new RegisterStudent();

    const res = sut.exec({
      name: "Foo Bar",
      email: "foo@bar.com"
    });

    expect(res).toBeTruthy();
  });
});