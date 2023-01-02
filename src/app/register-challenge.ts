import { Challenge } from "../domain/entities/challenge"
import { ChallengesRepository } from "../infra/repositories/in-memory/challenges-repository";

type ChallengePayload = {
  questions: Object,
  answers: Object,
  grade: number
}

export class RegisterChallenge {

  constructor(
    protected repository: ChallengesRepository
  ) {}

  public async exec({questions, answers, grade}: ChallengePayload) {

    let challenge: Challenge;

    try {
      challenge = Challenge.build({questions, answers, grade});
    } catch (error) {
      throw new Error("Problems while creating the challenge.");
    }

    let response: any;
    
    try {
      response = await this.repository.store(challenge);
    } catch (error) {
      throw new Error("Problems with database integration.");
    }

    return response;
  }
}