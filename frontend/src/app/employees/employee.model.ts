export class Employee {
    constructor(
      public name: string,
      public balance: number,
      public _id?: number,
      public updatedAt?: Date,
      public createdAt?: Date,
      public lastUpdatedBy?: string,
    ) { }
  }