import { Submission } from "../domain/entities/submission";

type SubmitRequest = {
  student_id: string;
  challenge_id: string;
  applyer_id: string;
}

export class SubmitChallenge {
  public async exec(param: SubmitRequest) {
    const submission = Submission.build({
      student_id: param.student_id,
      challenge_id: param.challenge_id,
      applyer_id: param.applyer_id
    });

    return submission;
  }
}