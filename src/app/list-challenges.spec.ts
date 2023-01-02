import { ListChallenges } from "./list-challenges";
import { RegisterChallenge } from "./register-challenge";
import { ChallengesRepository } from "../infra/repositories/in-memory/challenges-repository";

describe('list challenges usecase', () => {
  
  it('should return empty array', async () => {
    const sut = new ListChallenges(new ChallengesRepository());
    const res = await sut.exec();
    expect(res).toBeTruthy();
  });
  
  it('should store 3 studants and list their data', async () => {
    const repository = new ChallengesRepository();

    const mockedChallenges = [
      {
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
      },
      {
        questions: {
          1: "Foo",
          2: "Foo",
          3: "Foo",
          4: "Foo",
          5: "Foo"
        },
        answers: {
          1: "Bar",
          2: "Bar",
          3: "Bar",
          4: "Bar",
          5: "Bar"
        },
        grade: 3
      }
    ];

    const registerChallenge = new RegisterChallenge(repository);
    mockedChallenges.forEach(async challenge => {
      await registerChallenge.exec({
        questions: challenge.questions,
        answers: challenge.answers,
        grade: challenge.grade
      })
    });

    const sut = new ListChallenges(repository);
    const res = await sut.exec();
    expect(res).toBeTruthy();
    expect(res).toHaveLength(2);
  });
});