// pages/api/verify-token.ts
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    // Verify the token with your secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    return res.status(200).json({ decoded });
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
}
