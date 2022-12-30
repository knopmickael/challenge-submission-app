import { Core } from "./core";

type ChallengeProps = {
  questions: Object;
  answers: Object;
  grade: number;
}

export class Challenge extends Core<ChallengeProps> {
  constructor(props: ChallengeProps, id?: string) {
    super(props, id);
  }

  public static build(props: ChallengeProps, id?: string) {
    return new Challenge(props, id);
  }
}