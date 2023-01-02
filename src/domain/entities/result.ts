import { CoreEntity } from "../../config/core-entity";

type ResultProps = {
  submission_id: string;
  status: number;
}

export class Result extends CoreEntity<ResultProps> {
  constructor(props: ResultProps, id?: string) {
    super(props, id);
  }

  public static build(props: ResultProps, id?: string) {
    return new Result(props, id);
  }
}