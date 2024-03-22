import express from 'express';
import bodyParser from 'body-parser'
import taskRoutes from './routes/tasks.js'
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/',(req, res)=>(res.send("connected")));

app.use('/tasks', taskRoutes);

app.listen(3000);