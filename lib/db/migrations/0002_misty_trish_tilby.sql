DROP INDEX "session_token_unique";--> statement-breakpoint
DROP INDEX "user_email_unique";--> statement-breakpoint
DROP INDEX "location_slug_unique";--> statement-breakpoint
ALTER TABLE `account` ALTER COLUMN "access_token_expires_at" TO "access_token_expires_at" integer;--> statement-breakpoint
CREATE UNIQUE INDEX `session_token_unique` ON `session` (`token`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `location_slug_unique` ON `location` (`slug`);--> statement-breakpoint
ALTER TABLE `account` ALTER COLUMN "refresh_token_expires_at" TO "refresh_token_expires_at" integer;--> statement-breakpoint
ALTER TABLE `verification` ALTER COLUMN "created_at" TO "created_at" integer;--> statement-breakpoint
ALTER TABLE `verification` ALTER COLUMN "updated_at" TO "updated_at" integer;