#!/bin/sh
# Run migrations
DATABASE_URL="postgresql://postgres:postgres@db:5432/postgres?schema=public" npx prisma migrate dev
# start app
DATABASE_URL="postgresql://postgres:postgres@db:5432/postgres?schema=public" node server.js