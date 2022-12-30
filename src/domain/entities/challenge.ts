import { CoreEntity } from "../../config/core-entity";

type ChallengeProps = {
  questions: Object;
  answers: Object;
  grade: number;
}

export class Challenge extends CoreEntity<ChallengeProps> {
  constructor(props: ChallengeProps, id?: string) {
    super(props, id);
  }

  public static build(props: ChallengeProps, id?: string) {
    return new Challenge(props, id);
  }
}