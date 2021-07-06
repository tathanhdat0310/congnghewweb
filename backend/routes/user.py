from schemas.user import User
from fastapi import APIRouter
from models.user import users
from config.db import conn
user = APIRouter()

@user.get('/User/')
async def fetch_users():
    return conn.execute(users.select()).fetchall()

@user.get('/User/{id}')
async def fetch_users(id: int):
    return conn.execute(users.select().where(users.c.id == id)).first()

@user.post('/User/')
async def create_user(user: User):
    conn.execute(users.insert().values(
        name= user.name,
        email=user.email,
        password=user.password
    ))
    return conn.execute(users.select()).fetchall()

@user.put('/User/{id}')
async def update_user(id: int, user: User):
    conn.execute(users.update().values(
        name= user.name,
        email=user.email,
        password=user.password
    ).where(users.c.id == id))
    return conn.execute(users.select()).fetchall()


@user.delete('/User/{id}')
async def delete_user(id: int):
    conn.execute(users.delete().where(users.c.id == id))
    return conn.execute(users.select()).fetchall()

