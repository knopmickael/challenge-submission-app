import { ListApplyers } from "./list-applyers";
import { RegisterApplyer } from "./register-applyer";
import { ApplyersRepository } from "../infra/repositories/in-memory/applyers-repository";

describe('list applyers usecase', () => {
  
  it('should return empty array', async () => {
    const sut = new ListApplyers(new ApplyersRepository());
    const res = await sut.exec();
    expect(res).toBeTruthy();
  });
  
  it('should store 3 applyers and list their data', async () => {
    const repository = new ApplyersRepository();

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

    const registerApplyer = new RegisterApplyer(repository);
    mockedApplyers.forEach(async applyer => {
      await registerApplyer.exec({
        name: applyer.name,
        email: applyer.email
      })
    });

    const sut = new ListApplyers(repository);
    const res = await sut.exec();
    expect(res).toBeTruthy();
    expect(res).toHaveLength(3);
  });
});