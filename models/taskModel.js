import { Schema, model } from 'mongoose';

const projectSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Project = model("Project", projectSchema);
export default Project;