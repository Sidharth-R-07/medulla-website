import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { waitlistSchema, newsletterSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Waitlist API endpoint
  app.post("/api/waitlist", async (req, res) => {
    try {
      const validatedData = waitlistSchema.parse(req.body);
      const waitlistEntry = await storage.saveWaitlistEntry(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Successfully added to waitlist",
        data: waitlistEntry
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors
        });
      } else {
        console.error("Waitlist error:", error);
        res.status(500).json({
          success: false,
          message: "Failed to add to waitlist"
        });
      }
    }
  });

  // Newsletter API endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = newsletterSchema.parse(req.body);
      const newsletterEntry = await storage.saveNewsletterSubscription(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Successfully subscribed to newsletter",
        data: newsletterEntry
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors
        });
      } else {
        console.error("Newsletter error:", error);
        res.status(500).json({
          success: false,
          message: "Failed to subscribe to newsletter"
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
