import { Challenge } from "../entities/challenge";

export interface ChallengesRepositoryInterface {
  list(): Promise<Challenge[] | []>
  store(challenge: Challenge): Promise<Challenge | boolean | null>
  findById(id: string): Promise<Challenge | boolean | null>
}