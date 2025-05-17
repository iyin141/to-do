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
   // your frontend URL
  credentials: true               
}));
app.use(express.json())
app.use(cookieParser());
const PORT = process.env.PORT || 5001;

app.get('/', (_, res) => {
  res.send('Server is working');
});

app.get("/", (_req, res) => {
  res.send("Hello from Render!");
});

app.post('/Login', Login);


app.post('/Log', Log);
app.post('/task', Task)
app.post('/get', Get)
app.post('/update', Update)
app.post('/remove',Remove)

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

setInterval(() => {
  console.log('Server is alive...');
}, 100_000); 
