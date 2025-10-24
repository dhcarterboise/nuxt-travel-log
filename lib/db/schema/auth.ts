import { int, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
	id: text().primaryKey(),
	name: text().notNull(),
	email: text().notNull().unique(),
	emailVerified: int({ mode: "boolean" }).notNull(),
	image: text(),
	createdAt: integer({ mode: "timestamp_ms" })
		.$defaultFn(() => new Date()),
	updatedAt: integer({ mode: "timestamp_ms" })
		.$defaultFn(() => new Date()),
});

export const session = sqliteTable("session", {
	id: text().primaryKey(),
	expiresAt: integer().notNull(),
	token: text().notNull().unique(),
	createdAt: integer({ mode: "timestamp_ms" })
		.$defaultFn(() => new Date()),
	updatedAt: integer({ mode: "timestamp_ms" })
		.$defaultFn(() => new Date()),
	ipAddress: text(),
	userAgent: text(),
	userId: int().notNull().references(() => user.id, { onDelete: "cascade" }),
});

export const account = sqliteTable("account", {
	id: text().primaryKey(),
	accountId: text().notNull(),
	providerId: text().notNull(),
	userId: int().notNull().references(() => user.id, { onDelete: "cascade" }),
	accessToken: text(),
	refreshToken: text(),
	idToken: text(),
	accessTokenExpiresAt: integer(),
	refreshTokenExpiresAt: integer(),
	scope: text(),
	password: text(),
	createdAt: integer({ mode: "timestamp_ms" })
		.$defaultFn(() => new Date()),
	updatedAt: integer({ mode: "timestamp_ms" })
		.$defaultFn(() => new Date()),
});

export const verification = sqliteTable("verification", {
	id: text().primaryKey(),
	identifier: text().notNull(),
	value: text().notNull(),
	expiresAt: integer({ mode: "timestamp_ms" }).notNull(),
	createdAt: integer({ mode: "timestamp_ms" }).$defaultFn(() => new Date()),
	updatedAt: integer({ mode: "timestamp_ms" }).$defaultFn(() => new Date()),
});
