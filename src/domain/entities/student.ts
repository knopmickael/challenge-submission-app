import { Core } from "./core";

type StudentProps = {
  name: string;
  email: string;
}

export class Student extends Core<StudentProps> {
  constructor(props: StudentProps, id?: string) {
    super(props, id);
  }

  public static build(props: StudentProps, id?: string) {
    return new Student(props, id);
  }
}