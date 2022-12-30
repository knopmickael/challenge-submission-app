import { StudentsRepository } from "../infra/repositories/in-memory/students-repository";

export class ListStudents {

  constructor(
    protected repository: StudentsRepository
  ) {}

  public async exec() {

    let response: any;

    try {
      response = await this.repository.list();
    } catch (error) {
      throw new Error("Problems with database integration.");
    }

    return response;
  }
}