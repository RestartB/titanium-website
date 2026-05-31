PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_historic_ping` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`ping` integer,
	`time` integer NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_historic_ping`("id", "ping", "time") SELECT "id", "ping", "time" FROM `historic_ping`;--> statement-breakpoint
DROP TABLE `historic_ping`;--> statement-breakpoint
ALTER TABLE `__new_historic_ping` RENAME TO `historic_ping`;--> statement-breakpoint
PRAGMA foreign_keys=ON;