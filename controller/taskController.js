import Project from "../models/taskModel.js";

const getTasks = async (req, res) => {
    const user_Id =  req.user.id
    try {
        const tasks = await Project.find({user_Id});
        res.status(200).json(tasks);
    } catch (err) {
        res.status(400).json(err);
    }
};

const postTasks = async (req, res) => {
    const { title, description } = req.body;
    const user_Id = req.user.id
    try {
        const create = await Project.create({title, description, user_Id});
        res.status(200).json(create);
    } catch (err) {
        res.status(400).json(err);
    }
};

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    try {
        const update = await Project.findOneAndUpdate(
            { _id: id },
            { title, description }
        );
        res.status(200).json(update);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};

const delTask = async (req, res) => {
    const { id } = req.params;
    try {
        const del = await Project.deleteOne({ _id: id });
        res.status(200).json(del);
    } catch (err) {
        res.status(400).json(err);
    }
};

export {
    getTasks,
    postTasks,
    updateTask,
    delTask
};
