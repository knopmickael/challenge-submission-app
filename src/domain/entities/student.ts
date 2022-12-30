import { Entity } from "./core";

type StudentProps = {
  name: string;
  email: string;
}

export class Student extends Entity<StudentProps> {
  constructor(props: StudentProps, id?: string) {
    super(props, id);
  }

  public static build(props: StudentProps, id?: string) {
    return new Student(props, id);
  }
}