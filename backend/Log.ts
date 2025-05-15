import type { Request, Response } from 'express';
import { Create } from './firebase.ts';


export const Log = async (req: Request, res: Response) => { 
    const data = req.body;
    const email = data.Email;
    const password = data.Password;

    const check = await  Create(email, password);
    console.log(check);
    res.json(check);
    
}


