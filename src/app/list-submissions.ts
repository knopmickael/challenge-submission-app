import { SubmissionsRepository } from "../infra/repositories/in-memory/submissions-repository";

export class ListSubmissions {

  constructor(
    protected repository: SubmissionsRepository
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