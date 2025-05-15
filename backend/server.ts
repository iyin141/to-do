import express from 'express';
import cors from "cors";
import cookieParser from 'cookie-parser';
import { Login } from './Login.ts';
import { Log } from './Log.ts';
import { Task } from './Task.ts';
import { Get } from './Get.ts';
import { Update } from './Update.ts';
import { Remove } from './Remove.ts';

const app = express();
app.use(cors({
  origin: 'http://localhost:5173', // your frontend URL
  credentials: true               // allow cookies
}));
app.use(express.json())
app.use(cookieParser());
const PORT = 5001;

app.post('/Login', Login);


app.post('/Log', Log);
app.post('/task', Task)
app.post('/get', Get)
app.post('/update', Update)
app.post('/remove',Remove)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
