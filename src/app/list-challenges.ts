import { ChallengesRepository } from "../infra/repositories/in-memory/challenges-repository";

export class ListChallenges {

  constructor(
    protected repository: ChallengesRepository
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