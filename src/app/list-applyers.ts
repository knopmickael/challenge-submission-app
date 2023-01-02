import { ApplyersRepository } from "../infra/repositories/in-memory/applyers-repository";

export class ListApplyers {

  constructor(
    protected repository: ApplyersRepository
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