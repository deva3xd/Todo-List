import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const TODO = [
    "Test",
]

function seedTodo() {
    Promise.all(TODO.map(n => prisma.todos.create({ data: { name: n } })))
        .then(() => console.info('Succussfully create Todo records'))
        .catch(e => console.error('Failed to create Todo records', e))
}

seedTodo();