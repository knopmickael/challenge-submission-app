import { Entity } from "./core";

type SubmissionProps = {
  student_id: string;
  challenge_id: string;
  applyer_id: string;
  realized_at?: Date;
}

export class Submission extends Entity<SubmissionProps> {
  constructor(props: SubmissionProps, id?: string) {
    super(props, id);
  }

  public static build(props: SubmissionProps, id?: string) {
    return new Submission({
      ...props,
      realized_at: props.realized_at || new Date()
    }, id);
  }
}