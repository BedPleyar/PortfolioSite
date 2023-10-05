import express from 'express';
import mongoose from 'mongoose';
import Project from './models/ProjectModel'


const PORT = 4000;
const app = express();

app.use(express.json())

// routes
app.get('/', (req: any, res: any) => {
  res.send('Hello Node API');
});

app.get("/project", async (req: any, res: any) => {
  try {
    const project = await Project.find({});
    res.status(200).json(project)
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
})

app.get("/project/:id", async (req: any, res: any) => {
  try {
    const {id} = req.params;
    const project = await Project.findById(id);
    res.status(200).json(project)
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
})

app.post("/project", async (req: any, res: any) => {
  try {
    const project = await Project.create(req.body)
    res.status(200).json(project)
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({message : error.message})
  }
})

app.put("/project/:id", async (req: any, res: any) => {
  try {
    const {id} = req.params;
    const project = await Project.findByIdAndUpdate(id, req.body)
    if (!project) {
      res.status(404).json({message : `Cannot find object with id ${id}`})
    }
    const updatedProject = await Project.findById(id)

    res.status(200).json(updatedProject)
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({message : error.message})
  }
})

app.delete("/project/:id", async (req: any, res: any) => {
  try {
    const {id} = req.params;
    const project = await Project.findByIdAndDelete(id)
    if (!project) {
      res.status(404).json({message: `Cannot find object with id ${id}`})
    }
    res.status(200)
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({message : error.message})
  }
})

mongoose
  .connect(
    'mongodb+srv://admin:Supergreatpassword1%21@pdrahelper.joeldgn.mongodb.net/Portfolio?retryWrites=true&w=majority',
  )
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Node API app is running on ${PORT}`);
    });
  })
  .catch((error: any) => console.log(error));
