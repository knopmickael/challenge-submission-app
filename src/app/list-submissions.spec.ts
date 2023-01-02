import { ApplyersRepository } from "../infra/repositories/in-memory/applyers-repository";
import { ListApplyers } from "./list-applyers";
import { RegisterApplyer } from "./register-applyer";
import { StudentsRepository } from "../infra/repositories/in-memory/students-repository";
import { ListStudents } from "./list-students";
import { RegisterStudent } from "./register-student";
import { ChallengesRepository } from "../infra/repositories/in-memory/challenges-repository";
import { ListChallenges } from "./list-challenges";
import { RegisterChallenge } from "./register-challenge";
import { SubmissionsRepository } from "../infra/repositories/in-memory/submissions-repository";
import { SubmitChallenge } from "./submit-challenge";
import { ListSubmissions } from "./list-submissions";

describe('list challenges usecase', () => {
  
  it('should return empty array', async () => {
    const sut = new ListSubmissions(new SubmissionsRepository());
    const res = await sut.exec();
    expect(res).toBeTruthy();
  });

  async function createStudents() {
    const studentsRepository = new StudentsRepository();

    const mockedStudents = [
      {
        name: "First Student",
        email: "first@student.com"
      },
      {
        name: "Second Student",
        email: "second@student.com"
      },
      {
        name: "Third Student",
        email: "third@student.com"
      }
    ];

    const registerStudentService = new RegisterStudent(studentsRepository);
    mockedStudents.forEach(async student => {
      await registerStudentService.exec({
        name: student.name,
        email: student.email
      })
    });

    const listStudentsService = new ListStudents(studentsRepository);

    return await listStudentsService.exec();
  }

  async function createChallenges() {
    const challengesRepository = new ChallengesRepository();

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

    const registerChallengeService = new RegisterChallenge(challengesRepository);
    mockedChallenges.forEach(async challenge => {
      await registerChallengeService.exec({
        questions: challenge.questions,
        answers: challenge.answers,
        grade: challenge.grade
      })
    });

    const listChallengesService = new ListChallenges(challengesRepository);

    return await listChallengesService.exec();
  }

  async function createApplyers() {
    const applyersRepository = new ApplyersRepository();

    const mockedApplyers = [
      {
        name: "First Applyer",
        email: "first@applyer.com"
      },
      {
        name: "Second Applyer",
        email: "second@applyer.com"
      },
      {
        name: "Third Applyer",
        email: "third@applyer.com"
      }
    ];

    const registerApplyerService = new RegisterApplyer(applyersRepository);
    mockedApplyers.forEach(async applyer => {
      await registerApplyerService.exec({
        name: applyer.name,
        email: applyer.email
      })
    });

    const listApplyersService = new ListApplyers(applyersRepository);

    return await listApplyersService.exec();
  }

  function rand(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  it('should be able to store and retrieve 2 submitted challenges with their respective results', async () => {
    
    const students = await createStudents();
    const challenges = await createChallenges();
    const applyers = await createApplyers();

    const repository = new SubmissionsRepository();

    const submitChallengeService = new SubmitChallenge(repository);

    await submitChallengeService.exec({
      student_id: students[rand(0, 2)].id,
      challenge_id: challenges[0].id,
      applyer_id: applyers[rand(0, 2)].id,
      answers: {
        1: "bar",
        2: "",
        3: ""
      }
    });
    await submitChallengeService.exec({
      student_id: students[rand(0, 2)].id,
      challenge_id: challenges[1].id,
      applyer_id: applyers[rand(0, 2)].id,
      answers: {
        1: "bar",
        2: "",
        3: "bar",
        4: "bar",
        5: "",
      }
    });

    const sut = new ListSubmissions(repository);
    const res = await sut.exec();
    expect(res).toBeTruthy();
    expect(res).toHaveLength(2);
  });
});