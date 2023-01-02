import { RegisterChallenge } from "./register-challenge";
import { ChallengesRepository } from "../infra/repositories/in-memory/challenges-repository";

describe('register challenge usecase', () => {
  it('should create a challenge', async () => {

    const sut = new RegisterChallenge(new ChallengesRepository());

    const res = await sut.exec({
      questions: {
        1: "Foo",
        2: "Foo",
        3: "Foo"
      },
      answers: {
        1: "Bar",
        2: "Bar",
        3: "Bar"
      },
      grade: 2
    });

    expect(res).toBeTruthy();
  });
});