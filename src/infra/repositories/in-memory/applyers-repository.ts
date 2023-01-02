import { Applyer } from "../../../domain/entities/applyer";
import { ApplyersRepositoryInterface } from "../../../domain/repositories/applyers-repository-interface";

export class ApplyersRepository implements ApplyersRepositoryInterface {
  protected applyers: Applyer[] = [];

  public async list(): Promise<Applyer[] | []> {
    return this.applyers;
  }

  public async store(applyer: Applyer): Promise<Applyer | boolean | null> {
    this.applyers.push(applyer);

    if (!this.findById(applyer.getId())) {
      throw new Error("Problems while storing the applyer.");
    }

    return applyer;
  }

  public async findById(id: string): Promise<Applyer | boolean | null> {
    const found = this.applyers.find(applyer => applyer.getId() === id);
    
    if (!found) {
      throw new Error("This id doesn`t belongs to any applyer.");
    }

    return found;
  }
}