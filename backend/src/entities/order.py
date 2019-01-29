# coding=utf-8

from sqlalchemy import Column, String, Date, Numeric, Integer, ForeignKey
from sqlalchemy.orm import relationship

from .entity import Entity, Base
from .employee import Employee
from .transaction import Transaction

class Order(Entity, Base):
    __tablename__ = 'orders'

    description = Column(String)
    withdraw = Column(Numeric)
    invest = Column(Numeric)
    employee_id = Column(Integer, ForeignKey('employees.id'))
    transaction_id = Column(Integer, ForeignKey('transactions.id'))
    employee = relationship("Employee", backref="employee")
    transaction = relationship("Transaction", backref="transaction")

    def __init__(self, description, withdraw, invest, employee, transaction, created_by):
        Entity.__init__(self, created_by)
        self.description = description
        self.withdraw = withdraw
        self.invest = invest
        self.employee = employee
        self.transaction = transaction