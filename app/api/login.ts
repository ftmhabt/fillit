import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;

  // Add your authentication logic here
  // This is just an example - you should implement proper authentication
  if (email === "user@example.com" && password === "password") {
    const token = jwt.sign({ email, id: "123" }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    return res.status(200).json({ token });
  }

  return res.status(401).json({ message: "Invalid credentials" });
}
