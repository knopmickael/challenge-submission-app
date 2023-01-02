import { Submission } from "../domain/entities/submission";
import { ChallengesRepository } from "../infra/repositories/in-memory/challenges-repository";
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

    const challengesRepository = new ChallengesRepository();
    
    const submmited: any = [];
    response.forEach(async (subm: Submission) => {
      submmited.push(subm.props.challenge_id);
    });

    let challenge: any;
    try {
      // challenge = await challengesRepository.findById(submmited[0]);
      console.log(challenge);
      
    } catch (error) {
      throw new Error("Troubleshoot with challenges results.");
    }
    
    return response;
  }
}