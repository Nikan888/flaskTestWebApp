# coding=utf-8

from flask_cors import CORS

from flask import Flask, jsonify, request

from sqlalchemy import func, text

#import simplejson as json

from .entities.entity import Session, engine, Base
from .entities.employee import Employee, EmployeeSchema, EmployeeBalanceSchema
from .entities.transaction import Transaction, TransactionSchema
from .entities.order import Order, OrderSchema

# creating the Flask application
app = Flask(__name__)
CORS(app)

app.debug = True

# if needed, generate database schema
Base.metadata.create_all(engine)


@app.route('/api/employees')
def get_employees():
    # fetching from the database
    session = Session()
    employee_objects = session.query(Employee).all()

    # transforming into JSON-serializable objects
    schema = EmployeeSchema(many=True)
    employees = schema.dump(employee_objects)

    # serializing as JSON
    session.close()
    return jsonify(employees.data)


@app.route('/api/employees', methods=['POST'])
def add_employee():
    # mount employee object
    posted_employee = EmployeeSchema().load(request.get_json())

    employee = Employee(**posted_employee.data, created_by="HTTP post request")

    # persist employee
    session = Session()
    session.add(employee)
    session.commit()

    # return created employee
    new_employee = EmployeeSchema().dump(employee).data
    session.close()
    return jsonify(new_employee), 201

@app.route('/api/transactions')
def get_transactions():
    # fetching from the database
    session = Session()
    transaction_objects = session.query(Transaction).all()

    # transforming into JSON-serializable objects
    schema = TransactionSchema(many=True)
    transactions = schema.dump(transaction_objects)

    # serializing as JSON
    session.close()
    return jsonify(transactions.data)


@app.route('/api/transactions', methods=['POST'])
def add_transaction():
    # mount transaction object
    posted_transaction = TransactionSchema().load(request.get_json())

    transaction = Transaction(**posted_transaction.data, created_by="HTTP post request")

    # persist transaction
    session = Session()
    session.add(transaction)
    session.commit()

    # return created transaction
    new_transaction = TransactionSchema().dump(transaction).data
    session.close()
    return jsonify(new_transaction), 201

@app.route('/api/orders')
def get_orders():
    # fetching from the database
    session = Session()
    order_objects = session.query(Order).join(Employee).join(Transaction).all()

    # transforming into JSON-serializable objects
    schema = OrderSchema(many=True)
    orders = schema.dump(order_objects)

    # serializing as JSON
    session.close()
    return jsonify(orders.data)


@app.route('/api/orders', methods=['POST'])
def add_order():
    # mount order object
    posted_order = OrderSchema().load(request.get_json())

    order = Order(**posted_order.data, created_by="HTTP post request")

    # persist order
    session = Session()
    session.add(order)
    session.commit()

    # return created order
    new_order = OrderSchema().dump(order).data
    session.close()
    return jsonify(new_order), 201

@app.route('/api/orders/transactionOrders/<int:transaction_id>')
def get_transactionOrders(transaction_id):
    # fetching from the database
    session = Session()
    order_objects = session.query(Order).join(Employee).join(Transaction).filter(Transaction.id == transaction_id).all()

    if order_objects is not None:
        # transforming into JSON-serializable objects
        schema = OrderSchema(many=True)
        orders = schema.dump(order_objects)

        # serializing as JSON
        session.close()
        return jsonify(orders.data)

    else:
        abort(404, 'Transaction not found for ID: {transaction_id}'.format(transaction_id = transaction_id))

@app.route('/api/employees/employeeBalance')
def get_employeeBalance():
    # fetching from the database
    session = Session()
    sql = text('select (sum(invest) - sum(withdraw)) as balance, employees.name \
    from employees inner join orders on employees.id = orders.employee_id \
    group by employees.id')
    employee_objects = session.execute(sql)
    #order_objects = session.query(Order).filter(Order.employee_id == employee_id).all()

    if employee_objects is not None:
        # transforming into JSON-serializable objects
        schema = EmployeeBalanceSchema(many=True)
        employees = schema.dump(employee_objects)

        # serializing as JSON
        session.close()
        return jsonify(employees.data)

    else:
        abort(404)