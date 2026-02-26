import {
	integer,
	pgTable,
	varchar,
	text,
	timestamp,
	json,
	uuid,
} from "drizzle-orm/pg-core";
import { defineRelations } from "drizzle-orm";

// export const usersTable = pgTable("users", {
// 	id: integer().primaryKey().generatedAlwaysAsIdentity(),
// 	name: varchar().notNull(),
// 	age: integer().notNull(),
// 	email: varchar().notNull().unique(),
// });

export const lobbies = pgTable("lobbies", {
	id: uuid().primaryKey().defaultRandom(),
	name: text(),
	players: json(),
	gameTypeId: integer("game_type_id").references(() => gameTypes.id),
	gameData: json("game_data"),
	status: text(),
	createdAt: timestamp().defaultNow(),
	updatedAt: timestamp().defaultNow(),
});

export const gameTypes = pgTable("game_types", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	name: text(),
	numPlayers: integer("num_players"),
	description: text(),
});

export const relations = defineRelations({ lobbies, gameTypes }, (r) => ({
	lobbies: {
		gameType: r.one.gameTypes({
			from: r.lobbies.gameTypeId,
			to: r.gameTypes.id,
		}),
	},
}));
