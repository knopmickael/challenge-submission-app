import crypto from 'crypto';

export abstract class CoreEntity<UnknowParameter> {
  protected id: string;
  public props: UnknowParameter;

  constructor(props: UnknowParameter, id?: string) {
    this.id = id || crypto.randomUUID();
    this.props = props;
  }

  public getId() {
    return this.id;
  }
}