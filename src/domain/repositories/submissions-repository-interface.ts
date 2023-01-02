import { Submission } from "../entities/submission";

export interface SubmissionsRepositoryInterface {
  list(): Promise<Submission[] | []>
  store(submission: Submission): Promise<Submission | boolean | null>
  findById(id: string): Promise<Submission | boolean | null>
}