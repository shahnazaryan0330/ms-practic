import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis

export const prisma =
	globalForPrisma.prisma ||
	new PrismaClient({
		// лог-запись по желанию:
		// log: ['query', 'info', 'warn', 'error'],
	})