import {pgTable,varchar,boolean,serial} from 'drizzle-orm/pg-core';

export const USER_TABLE = pgTable('users', {
    id:serial().primaryKey(),
    name:varchar().notNull(),
    email:varchar().notNull().unique(),
    isMember:boolean().default(false)
});