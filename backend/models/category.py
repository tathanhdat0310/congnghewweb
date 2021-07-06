from sqlalchemy import Table, Column
from sqlalchemy.sql.schema import ForeignKey
from sqlalchemy.sql.sqltypes import Integer, String
from config.db import meta, engine

categories =Table('categories', meta,
Column('categoryID', Integer, primary_key=True),
Column('categoryName', String(255)),
Column('description', String(255))
)
meta.create_all(engine)