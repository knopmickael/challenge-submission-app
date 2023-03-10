import { ListStudents } from "./list-students";
import { RegisterStudent } from "./register-student";
import { StudentsRepository } from "../infra/repositories/in-memory/students-repository";

describe('list students usecase', () => {
  
  it('should return empty array', async () => {
    const sut = new ListStudents(new StudentsRepository());
    const res = await sut.exec();
    expect(res).toBeTruthy();
  });
  
  it('should store 3 students and list their data', async () => {
    const repository = new StudentsRepository();

    const mockedStudents = [
      {
        name: "First Student",
        email: "first@student.com"
      },
      {
        name: "Second Student",
        email: "second@student.com"
      },
      {
        name: "Third Student",
        email: "third@student.com"
      }
    ];

    const registerStudent = new RegisterStudent(repository);
    mockedStudents.forEach(async student => {
      await registerStudent.exec({
        name: student.name,
        email: student.email
      })
    });

    const sut = new ListStudents(repository);
    const res = await sut.exec();
    expect(res).toBeTruthy();
    expect(res).toHaveLength(3);
  });
});