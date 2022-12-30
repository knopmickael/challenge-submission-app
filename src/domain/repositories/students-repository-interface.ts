import { Student } from "../entities/student";

export interface StudentsRepositoryInterface {
  list(): Promise<Student[] | []>
  store(student: Student): Promise<Student | boolean | null>
  findById(id: string): Promise<Student | boolean | null>
}