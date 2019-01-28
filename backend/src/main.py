# coding=utf-8

from entities.entity import Session, engine, Base
from entities.test import Test
from datetime import date

# generate database schema
Base.metadata.create_all(engine)

# start session
session = Session()

# check for existing data
tests = session.query(Test).all()

if len(tests) == 0:
    # create and persist dummy test
    python_test = Test("StreetBurger", date(2018, 11, 19), "script")
    session.add(python_test)
    session.commit()
    session.close()

    # reload tests
    tests = session.query(Test).all()

# show existing tests
print('### Tests:')
for test in tests:
    print(f'({test.id}) {test.name} - {test.date}')