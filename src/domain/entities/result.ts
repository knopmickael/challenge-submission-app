import { Entity } from "../core/Entity";

type ResultProps = {
  submission_id: string;
  score: number;
}

export class Result extends Entity<ResultProps> {
  constructor(props: ResultProps, id?: string) {
    super(props, id);
  }

  public static build(props: ResultProps, id?: string) {
    return new Result(props, id);
  }
}