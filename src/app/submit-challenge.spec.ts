import { SubmissionsRepository } from "../infra/repositories/in-memory/submissions-repository";
import { SubmitChallenge } from "./submit-challenge";

describe('submit challenge usecase', () => {
  it('should be able to submit a fake challenge', async () => {

    let repository = new SubmissionsRepository();

    const sut = new SubmitChallenge(repository);
    
    const res = await sut.exec({
      student_id: "foobar",
      challenge_id: "foobar",
      applyer_id: "foobar"
    });

    expect(res).toBeTruthy();
  });
});