import type { Request, Response } from 'express';
import { update_task } from './firebase.ts';

 type Formdata = {
  Task: string,
  Date: string,
  Uid: string
  id: string;
}




export const Update = async (req: Request, res: Response) => { 
    const data : Formdata = req.body
    const update = await update_task(data.Uid, data.id, data.Task, data.Date)
    res.json(update)
}


