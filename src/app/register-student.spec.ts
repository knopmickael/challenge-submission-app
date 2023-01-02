import { RegisterStudent } from "./register-student";
import { StudentsRepository } from "../infra/repositories/in-memory/students-repository";

describe('register student usecase', () => {
  it('should create a student', async () => {

    const sut = new RegisterStudent(new StudentsRepository());

    const res = await sut.exec({
      name: "Foo Bar",
      email: "foo@bar.com"
    });

    expect(res).toBeTruthy();
  });
});