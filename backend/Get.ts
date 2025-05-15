import type { Request, Response } from 'express';
import { Fetch_task } from './firebase.ts';




export const Get = async (req: Request, res: Response) => {
    const {uid} = req.body;
    const result = await Fetch_task(uid)
    console.log(result)
    res.json(result)
    
}


