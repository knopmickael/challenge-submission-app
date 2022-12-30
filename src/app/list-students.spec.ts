import { ListStudents } from "./list-students";
import { RegisterStudent } from "./register-student";
import { StudentsRepository } from "../infra/repositories/in-memory/students-repository";

describe('list students usecase', () => {
  
  it('should return empty array', () => {
    const sut = new ListStudents(new StudentsRepository());
    const res = sut.exec();
    expect(res).toBeTruthy();
  });
  
  it('should store 3 studants and list their data', () => {
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
    mockedStudents.forEach(student => {
      registerStudent.exec({
        name: student.name,
        email: student.email
      })
    });

    const sut = new ListStudents(repository);
    const res = sut.exec();
    expect(res).toBeTruthy();
    // expect(res).toHaveLength(3);
  });
});