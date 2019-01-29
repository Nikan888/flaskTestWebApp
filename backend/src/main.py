# coding=utf-8

from datetime import date

from entities.entity import Session, engine, Base
from entities.employee import Employee
from entities.transaction import Transaction
from entities.order import Order

# generate database schema
Base.metadata.create_all(engine)

# create a new session
session = Session()

# create some test employees
test_employee_one = Employee("Ivan Ivanov", "script")
test_employee_two = Employee("Petr Petrov", "script")
test_employee_three = Employee("Sidor Sidorov", "script")
test_employee_four = Employee("Yury Bolbukov", "script")
test_employee_five = Employee("Stas Verevkin", "script")
test_employee_six = Employee("Unknown Man", "script")

# create some test transactions
test_transaction_one = Transaction("Dinner in Fasol", date(2018, 11, 21), "script")
test_transaction_two = Transaction("Dinner in Rumyanzevski", date(2018, 11, 20), "script")
test_transaction_three = Transaction("Dinner in StreetBurger", date(2018, 11, 19), "script")

# create some test orders
test_order_one = Order("Test description for test order 1", 5, 0, test_employee_one, test_transaction_one, "script")
test_order_two = Order("Test description for test order 2", 5, 0, test_employee_two, test_transaction_one, "script")
test_order_three = Order("Test description for test order 3", 5, 15, test_employee_three, test_transaction_one, "script")
test_order_four = Order("Test description for test order 4", 7, 5, test_employee_four, test_transaction_two, "script")
test_order_five = Order("Test description for test order 5", 2, 9, test_employee_five, test_transaction_two, "script")
test_order_six = Order("Test description for test order 6", 42, 24, test_employee_six, test_transaction_two, "script")
test_order_seven = Order("Test description for test order 7", 29, 4, test_employee_five, test_transaction_three, "script")
test_order_eight = Order("Test description for test order 8", 5, 2, test_employee_six, test_transaction_three, "script")
test_order_nine = Order("Test description for test order 9", 6, 4, test_employee_four, test_transaction_three, "script")

# persist dummy employees    
session.add(test_employee_one)
session.add(test_employee_two)
session.add(test_employee_three)
session.add(test_employee_four)
session.add(test_employee_five)
session.add(test_employee_six)
# persist dummy transactions
session.add(test_transaction_one)
session.add(test_transaction_two)
session.add(test_transaction_three)
# persist dummy orders
session.add(test_order_one)
session.add(test_order_two)
session.add(test_order_three)
session.add(test_order_four)
session.add(test_order_five)
session.add(test_order_six)
session.add(test_order_seven)
session.add(test_order_eight)
session.add(test_order_nine)

# commit and close session
session.commit()
session.close()

# extract all employees
employees = session.query(Employee).all()
# extract all transactions
transactions = session.query(Transaction).all()
# extract all orders
orders = session.query(Order) \
    .join(Employee) \
    .join(Transaction) \
    .all()

# show existing employees
print('### Employees:')
for employee in employees:
    print(f'({employee.id}) {employee.name}')

# show existing transactions
print('### Transactions:')
for transaction in transactions:
    print(f'({transaction.id}) {transaction.name} - {transaction.date}')

# show existing orders
print('### Orders:')
for order in orders:
    print(f'({order.id}) {order.description}|{order.withdraw}|{order.invest}|{order.employee.name}|{order.transaction.name}')