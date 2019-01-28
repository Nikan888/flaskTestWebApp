# coding=utf-8

from marshmallow import Schema, fields

from sqlalchemy import Column, String, Date

from .entity import Entity, Base

class Test(Entity, Base):
    __tablename__ = 'tests'

    name = Column(String)
    date = Column(Date)

    def __init__(self, name, date, created_by):
        Entity.__init__(self, created_by)
        self.name = name
        self.date = date

class TestSchema(Schema):
    id = fields.Number()
    name = fields.Str()
    date = fields.Date()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()
    last_updated_by = fields.Str()