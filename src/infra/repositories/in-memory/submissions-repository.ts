import { Submission } from "../../../domain/entities/submission";
import { SubmissionsRepositoryInterface } from "../../../domain/repositories/submissions-repository-interface";

export class SubmissionsRepository implements SubmissionsRepositoryInterface {
  protected submissions: Submission[] = [];

  public async list(): Promise<Submission[] | []> {
    return this.submissions;
  }

  public async store(submission: Submission): Promise<Submission | boolean | null> {
    this.submissions.push(submission);

    if (!this.findById(submission.getId())) {
      throw new Error("Problems while storing the submission.");
    }

    return submission;
  }

  public async findById(id: string): Promise<Submission | boolean | null> {
    const found = this.submissions.find(submission => submission.getId() === id);
    
    if (!found) {
      throw new Error("This id doesn`t belongs to any submission.");
    }

    return found;
  }
}