import express from "express";

const router = express.Router();

let array = [];

router.get('/', (req, res)=>{
  res.send(JSON.stringify(array));
})

router.post('/', (req, res)=>{
  const ob = {
    id: array.length,
    title: req.body.title,
    description: req.body.description
  };
  array.push(ob);
  res.send(array);
});

router.put("/:id", (req, res)=>{
  const id = req.params.id;
  array[id].title = req.body.title;
  array[id].description = req.body.description;
  res.send(array[id])
})

router.delete('/:id', (req, res)=>{
  const arr = array.filter((a) => a.id != req.params["id"]);
  arr.map((item, index)=>{
    item.id = index;
  });
  res.send(arr);
  array = arr; 
})

export default router;