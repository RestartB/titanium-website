CREATE TABLE `incident_updates` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`incidentId` integer NOT NULL,
	`status` text NOT NULL,
	`description` text NOT NULL,
	`createdAt` integer NOT NULL,
	FOREIGN KEY (`incidentId`) REFERENCES `incidents`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `incidents` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`resolved` integer DEFAULT false NOT NULL,
	`createdAt` integer NOT NULL,
	`resolvedAt` integer
);
