import { Student } from "../domain/entities/student"
import { StudentsRepository } from "../infra/repositories/in-memory/students-repository";

type StudentPayload = {
  name: string,
  email: string
}

export class RegisterStudent {

  constructor(
    protected repository: StudentsRepository
  ) {}

  public async exec({name, email}: StudentPayload) {

    let student: Student;

    try {
      student = Student.build({name, email});
    } catch (error) {
      throw new Error("Problems while creating the student.");
    }

    let response: any;
    
    try {
      response = await this.repository.store(student);
    } catch (error) {
      throw new Error("Problems with database integration.");
    }

    return response;
  }
}