import { SubmitChallenge } from "./submit-challenge";

describe('submit challenge usecase', () => {
  it('should be able to submit a fake challenge', async () => {

    const sut = new SubmitChallenge();
    
    const res = await sut.exec({
      student_id: "foobar",
      challenge_id: "foobar",
      applyer_id: "foobar"
    });

    expect(res).toBeTruthy();

  });
});