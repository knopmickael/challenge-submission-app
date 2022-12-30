import { Student } from "../domain/entities/student"

type StudentPayload = {
  name: string,
  email: string
}

export class RegisterStudent {
  exec({name, email}: StudentPayload) {
    const student = Student.build({name, email});
    return student;
  }
}