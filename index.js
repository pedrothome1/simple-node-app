const express = require('express');

let projects = [];
let requestsCount = 0;

const server = express();
server.use(express.json());
server.use((req, res, next) => {
  console.log(`Requests count: ${++requestsCount}`);
  return next();
});

function checkIfProjectExists(req, res, next) {
  const project = projects.find(p => p.id === req.params.id);

  if (!project) {
    return res.status(400).json({ error: 'Project does not exists.' });
  }

  return next();
}

server.post('/projects', (req, res) => {
  const { id, title } = req.body;
  const newProject = { id, title, tasks: [] };
  
  projects.push(newProject);

  return res.json(newProject);
});

server.get('/projects', (req, res) => {
  return res.json(projects);
});

server.put('/projects/:id', checkIfProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id === id);
  project.title = title;

  return res.json(project);
});

server.delete('/projects/:id', checkIfProjectExists, (req, res) => {
  const { id } = req.params;
  projects = projects.filter(p => p.id !== id);

  return res.status(204).send();
});

server.post('/projects/:id/tasks', checkIfProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id === id);
  project.tasks.push(title);

  return res.json(project);
});

server.listen(3000);
