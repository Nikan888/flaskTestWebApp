# coding=utf-8

from marshmallow import Schema, fields

from sqlalchemy import Column, String, Date

from .entity import Entity, Base

class Employee(Entity, Base):
	__tablename__ = 'employees'

	name = Column(String)

	def __init__(self, name, created_by):
		Entity.__init__(self, created_by)
		self.name = name

class EmployeeSchema(Schema):
	id = fields.Number()
	name = fields.Str()
	created_at = fields.DateTime()
	updated_at = fields.DateTime()
	last_updated_by = fields.Str()