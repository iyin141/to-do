import type { Request, Response } from 'express';
import { delete_task } from './firebase.ts';


 type Formdata = {
  Task: string,
  Date: string,
  Uid: string
  id: string;
}



export const Remove = async (req: Request, res: Response) => { 
  const data: Formdata = req.body 
  const result = await delete_task(data.Uid, data.id);
  res.json('done')
}


