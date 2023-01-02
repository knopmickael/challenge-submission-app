import { Challenge } from "../../../domain/entities/challenge";
import { ChallengesRepositoryInterface } from "../../../domain/repositories/challenges-repository-interface";

export class ChallengesRepository implements ChallengesRepositoryInterface {
  protected challenges: Challenge[] = [];

  public async list(): Promise<Challenge[] | []> {
    return this.challenges;
  }

  public async store(challenge: Challenge): Promise<Challenge | boolean | null> {
    this.challenges.push(challenge);

    if (!this.findById(challenge.getId())) {
      throw new Error("Problems while storing the challenge.");
    }

    return challenge;
  }

  public async findById(id: string): Promise<Challenge | boolean | null> {
    const found = this.challenges.find(challenge => challenge.getId() === id);
    
    if (!found) {
      throw new Error("This id doesn`t belongs to any challenge.");
    }

    return found;
  }
}