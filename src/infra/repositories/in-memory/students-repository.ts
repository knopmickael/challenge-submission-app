import { Student } from "../../../domain/entities/student";
import { StudentsRepositoryInterface } from "../../../domain/repositories/students-repository-interface";

export class StudentsRepository implements StudentsRepositoryInterface {
  protected students: Student[] = [];

  public async list(): Promise<Student[] | []> {
    return this.students;
  }

  public async store(student: Student): Promise<Student | boolean | null> {
    this.students.push(student);

    if (!this.findById(student.getId())) {
      throw new Error("Problems while storing the student.");
    }

    return student;
  }

  public async findById(id: string): Promise<Student | boolean | null> {
    const found = this.students.find(student => student.getId() === id);
    
    if (!found) {
      throw new Error("This id doesn`t belongs to any student.");
    }

    return found;
  }
}