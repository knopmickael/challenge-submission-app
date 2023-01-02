import { Applyer } from "../domain/entities/applyer"
import { ApplyersRepository } from "../infra/repositories/in-memory/applyers-repository";

type ApplyerPayload = {
  name: string,
  email: string
}

export class RegisterApplyer {

  constructor(
    protected repository: ApplyersRepository
  ) {}

  public async exec({name, email}: ApplyerPayload) {

    let applyer: Applyer;

    try {
      applyer = Applyer.build({name, email});
    } catch (error) {
      throw new Error("Problems while creating the applyer.");
    }

    let response: any;
    
    try {
      response = await this.repository.store(applyer);
    } catch (error) {
      throw new Error("Problems with database integration.");
    }

    return response;
  }
}