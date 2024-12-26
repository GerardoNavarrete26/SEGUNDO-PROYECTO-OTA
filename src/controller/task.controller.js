import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
};

export const createTask = async (req, res) => {
    const { title, description, date } = req.body;
    console.log(req.user);
    const newTask = new Task({
        title,
        description,
        date,
        user: req.user.id
    });

    const savedTask = await newTask.save();
    res.json(savedTask);
};

export const getTask = async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
};

export const deleteTask = async (req, res) => {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) return res.status(404).json({ message: "Task not found" });
    res.json(deletedTask);
};

export const updateTask = async (req, res) => {
    const taskUpdated = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json(taskUpdated);
};
