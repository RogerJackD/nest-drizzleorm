import { decimal, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";


export const  products = pgTable('products', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    price: decimal('price', { precision: 10, scale: 2 }).notNull(),
    createdAt: timestamp('created_at').defaultNow(),
})

export type Product = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferSelect;