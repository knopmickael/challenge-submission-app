import { Student } from "../entities/student";

export interface StudentsRepository {
  create(props: Object): Promise<Student | boolean | null>
  findById(id: string): Promise<Student | null>
}