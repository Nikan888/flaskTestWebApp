export class Test {
    constructor(
      public name: string,
      public date: Date,
      public _id?: number,
      public updatedAt?: Date,
      public createdAt?: Date,
      public lastUpdatedBy?: string,
    ) { }
  }