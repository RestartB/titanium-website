import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const incidents = sqliteTable('incidents', {
  id: integer().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  description: text().notNull(),
  resolved: integer({ mode: 'boolean' }).notNull().default(false),
  createdAt: integer({ mode: 'timestamp' })
    .notNull()
    .$defaultFn(() => new Date()),
  resolvedAt: integer({ mode: 'timestamp' })
});

export const incidentUpdates = sqliteTable('incident_updates', {
  id: integer().primaryKey({ autoIncrement: true }),
  incidentId: integer()
    .notNull()
    .references(() => incidents.id, { onDelete: 'cascade' }),
  status: text().notNull(),
  description: text().notNull(),
  createdAt: integer({ mode: 'timestamp' })
    .notNull()
    .$defaultFn(() => new Date())
});

export const historicPing = sqliteTable('historic_ping', {
  id: integer().primaryKey({ autoIncrement: true }),
  ping: integer(),
  time: integer({ mode: 'timestamp' })
    .notNull()
    .$defaultFn(() => new Date())
});

export const historicPingAvg = sqliteTable('historic_ping_avg', {
  id: integer().primaryKey({ autoIncrement: true }),
  ping: integer(),
  time: integer({ mode: 'timestamp' })
    .notNull()
    .$defaultFn(() => new Date())
});
