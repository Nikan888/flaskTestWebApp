# coding=utf-8

from sqlalchemy import Column, String, Date

from .entity import Entity, Base

class Employee(Entity, Base):
	__tablename__ = 'employees'

	name = Column(String)

	def __init__(self, name, created_by):
		Entity.__init__(self, created_by)
		self.name = name