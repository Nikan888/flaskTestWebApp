import { Employee } from '../employees/employee.model';
import { Transaction } from '../transactions/transaction.model';

export class Order {
    constructor(
      public description: string,
      public withdraw: number,
      public invest: number,
      public employee: Employee,
      public transaction: Transaction,
      public _id?: number,
      public updatedAt?: Date,
      public createdAt?: Date,
      public lastUpdatedBy?: string,
    ) { }
  }