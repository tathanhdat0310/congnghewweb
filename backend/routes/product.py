from schemas.user import Product
from fastapi import APIRouter
from models.user import products
from config.db import conn
product = APIRouter()

@product.get('/products')
async def fetch_products():
    return conn.execute(products.select()).fetchall()

@product.get('/products{id}')
async def fetch_products(id: int):
    return conn.execute(products.select().where(products.c.id == id)).first()

@product.post('/products')
async def create_product(product: Product):
    conn.execute(products.insert().values(
        productName= product.productName,
        supplierID= product.supplierID,
        categoryID= product.categoryID,
        unit= product.unit,
        description= product.description
    ))
    return conn.execute(products.select()).fetchall()

@product.put('/products{id}')
async def update_product(id: int, product: Product):
    conn.execute(products.update().values(
        productName= product.productName,
        supplierID= product.supplierID,
        categoryID= product.categoryID,
        unit= product.unit,
        price= product.price
    ).where(products.c.id == id))
    return conn.execute(products.select()).fetchall()


@product.delete('/products/{id}')
async def delete_product(id: int):
    conn.execute(products.delete().where(products.c.id == id))
    return conn.execute(products.select()).fetchall()