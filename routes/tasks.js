import express from "express";
import Project from "../models/taskModel.js";

const router = express.Router();

let array = [];

router.get('/', async (req, res)=>{
  const content = await Project.find();
  console.log(content)
  res.send(JSON.stringify(content));
})

router.post('/', async (req, res)=>{
  const ob = {
    title: req.body.title,
    description: req.body.description
  };
  const create = await Project.create(ob);
  console.log(create);
  res.send(create);
});

router.put("/:id", (req, res)=>{
  const id = req.params.id;
  array[id].title = req.body.title;
  array[id].description = req.body.description;
  res.send(array[id])
})

router.delete('/:id', async(req, res)=>{
  const del = await Project.deleteOne({_id: req.params.id});
  console.log(del);
  const arr = array.filter((a) => a.id != req.params["id"]);
  arr.map((item, index)=>{
    item.id = index;
  });
  res.send(arr);
  array = arr; 
})

export default router;