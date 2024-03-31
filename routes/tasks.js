import express from "express";
import { v4 as uuid4 } from "uuid";

const router = express.Router();

let array = [];

router.get('/', (req, res)=>{
  res.send(JSON.stringify(array));
})

router.post('/', (req, res)=>{
  const ob = {
    id: uuid4(),
    title: req.body.title,
    description: req.body.description
  };
  array.push(ob);
  console.log(array.length);
});

router.delete('/:id', (req, res)=>{
  const arr = array.filter((a) => a.id != req.params["id"]);
  res.send(arr);
  array = arr;
  console.log(array.lenght)
})

export default router;