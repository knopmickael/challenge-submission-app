import { Applyer } from "../entities/applyer";

export interface ApplyersRepositoryInterface {
  list(): Promise<Applyer[] | []>
  store(student: Applyer): Promise<Applyer | boolean | null>
  findById(id: string): Promise<Applyer | boolean | null>
}