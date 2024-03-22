import express from "express";
import { v4 as uuid4 } from "uuid";

const router = express.Router();

const array = [];

router.post('/', (req, res)=>{
    const ob = {
      id: uuid4(),
      title: req.body.title,
      description: req.body.description
    };
    array.push(ob);
    res.send(array);
})

export default router;