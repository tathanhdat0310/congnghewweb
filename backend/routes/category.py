from schemas.user import Category
from fastapi import APIRouter
from models.category import categories
from config.db import conn
category = APIRouter()


@category.get('/Categories/')
async def fetch_categories():
    return conn.execute(categories.select()).fetchall()

@category.get('/Categories/{categoryID}')
async def fetch_categories(categoryID: int):
    return conn.execute(categories.select().where(categories.c.id == categoryID)).first()

@category.post('/Categories/')
async def create_category(category: Category):
    conn.execute(categories.insert().values(
        categoryName= category.categoryName,
        description=category.description
    ))
    return conn.execute(categories.select()).fetchall()

@category.put('/Categories/{categoryID}')
async def category(categoryID: int, category: Category):
    conn.execute(categories.update().values(
        categoryName= category.categoryName,
        description=category.description
    ).where(categories.c.id == categoryID))
    return conn.execute(categories.select()).fetchall()


@category.delete('/Categories/{categoryID}')
async def delete_category(categoryID: int):
    conn.execute(categories.delete().where(categories.c.id == categoryID))
    return conn.execute(categories.select()).fetchall()