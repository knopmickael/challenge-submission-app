import { CoreEntity } from "../../config/core-entity";

type ApplyerProps = {
  name: string;
  email: string;
}

export class Applyer extends CoreEntity<ApplyerProps> {
  constructor(props: ApplyerProps, id?: string) {
    super(props, id);
  }

  public static build(props: ApplyerProps, id?: string) {
    return new Applyer(props, id);
  }
}