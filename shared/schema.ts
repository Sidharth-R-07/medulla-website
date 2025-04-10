import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table (keeping the original schema)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Waitlist table
export const waitlist = pgTable("waitlist", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  specialty: text("specialty").notNull(),
  hospital: text("hospital").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const waitlistSchema = createInsertSchema(waitlist).pick({
  name: true,
  email: true,
  specialty: true,
  hospital: true,
});

export type InsertWaitlistEntry = z.infer<typeof waitlistSchema>;
export type WaitlistEntry = typeof waitlist.$inferSelect;

// Newsletter table
export const newsletter = pgTable("newsletter", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const newsletterSchema = createInsertSchema(newsletter).pick({
  email: true,
});

export type InsertNewsletterSubscription = z.infer<typeof newsletterSchema>;
export type NewsletterSubscription = typeof newsletter.$inferSelect;
