import type { Request, Response } from 'express';
import { Log_task } from './firebase.ts';


export const Task = async (req: Request, res: Response) => { 
    const data = req.body;
    const task = await Log_task(data.task, data.date, data.uid)
    console.log(task)
   res.json({ message: task?.message || 'No message returned' });
    
}


