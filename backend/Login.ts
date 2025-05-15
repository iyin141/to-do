import type { Request, Response } from 'express';
import admin from 'firebase-admin';



export const Login = async (req: Request, res: Response) => { 
    const { token } = req.body;

  try {
    const decoded = await admin.auth().verifyIdToken(token);
    res.send({ message: "success", user: token , uid: decoded.uid });
  } catch (error) {
    res.status(401).send({ error: "Invalid token" });
  }
}


