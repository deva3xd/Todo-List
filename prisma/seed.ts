import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const COFFEE_NAMES = [
    "Black Coffee",
    "Turkish Coffee",
    "Cold Brew",
    "Iced Coffee",
    "Ristretto",
]

/**
 * For each coffee name, create a Coffee record in the DB
 */
function seedCoffee() {
    Promise.all(COFFEE_NAMES.map(n => prisma.todos.create({ data: { name: n } })))
        .then(() => console.info('[SEED] Succussfully create coffee records'))
        .catch(e => console.error('[SEED] Failed to create coffee records', e))
}

seedCoffee();