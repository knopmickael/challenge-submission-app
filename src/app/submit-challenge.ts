import { Submission } from "../domain/entities/submission"
import { SubmissionsRepository } from "../infra/repositories/in-memory/submissions-repository";

type SubmissionPayload = {
  student_id: string,
  challenge_id: string,
  applyer_id: string
}

export class SubmitChallenge {

  constructor(
    protected repository: SubmissionsRepository
  ) {}

  public async exec({student_id, challenge_id, applyer_id}: SubmissionPayload) {

    let submission: Submission;

    try {
      submission = Submission.build({student_id, challenge_id, applyer_id});
    } catch (error) {
      throw new Error("Problems while creating the submission.");
    }

    let response: any;
    
    try {
      response = await this.repository.store(submission);
    } catch (error) {
      throw new Error("Problems with database integration.");
    }

    return response;
  }
}