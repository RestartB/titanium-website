import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const incidents = sqliteTable('incidents', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  description: text().notNull(),
  resolved: integer({ mode: 'boolean' }).notNull().default(false),
  createdAt: integer({ mode: 'timestamp' }).notNull(),
  resolvedAt: integer({ mode: 'timestamp' })
});

export const incidentUpdates = sqliteTable('incident_updates', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  incidentId: integer('incidentId')
    .notNull()
    .references(() => incidents.id, { onDelete: 'cascade' }),
  status: text('status').notNull(),
  description: text().notNull(),
  createdAt: integer({ mode: 'timestamp' }).notNull()
});
