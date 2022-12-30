import { Entity } from "../../core/entity";

type ChallengeProps = {
  questions: Object;
  answers: Object;
  grade: number;
}

export class Challenge extends Entity<ChallengeProps> {
  constructor(props: ChallengeProps, id?: string) {
    super(props, id);
  }

  public static build(props: ChallengeProps, id?: string) {
    return new Challenge(props, id);
  }
}