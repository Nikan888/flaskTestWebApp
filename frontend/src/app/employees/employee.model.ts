export class Employee {
    constructor(
      public name: string,
      public _id?: number,
      public updatedAt?: Date,
      public createdAt?: Date,
      public lastUpdatedBy?: string,
    ) { }
  }