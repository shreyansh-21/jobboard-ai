import { PrismaClient } from '@prisma/client';
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

//globalThis.prisma is a global variable that ensures that the PrismaClient instance is reused across module reloads in development mode, preventing the exhaustion of database connections.