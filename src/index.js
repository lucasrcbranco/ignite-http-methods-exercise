const express = require('express');
const app = express();
app.use(express.json());

let cursos = [
  {
    name:"NodeJS",
    duration:"25h"
  },
  {
    name:"ReactJS",
    duration:"20h"
  },
  {
    name:"ReactNative",
    duration:"30h"
  }
];
app.get('/courses', (req, res) => {
  return res.status(200).json(cursos);
});
app.post('/courses', (req, res) => {
  const {name, duration} = req.body;
  cursos.push({name, duration});
  return res.status(201).json(cursos);
});
app.put('/courses/:name', (req, res) => {
  const {name} = req.params;
  const {newName} = req.body;
  const curso = cursos.find(curso => curso.name.toLowerCase() === name);
  curso.name = newName;
  return res.status(201).json(curso);
});
app.patch('/courses/:name', (req, res) => {
  const {name} = req.params;
  const {newName} = req.body;
  const curso = cursos.find(curso => curso.name.toLowerCase() === name);
  curso.name = newName;
  return res.status(201).json(curso);
});
app.delete('/courses/:name', (req, res) => {
  const {name} = req.params;
  const cursoIndex = cursos.findIndex(curso => curso.name.toLowerCase() === name);
  const cursoRemovido = cursos.find(curso => curso.name.toLowerCase() === name);
  const cursosAtualizados = cursos.splice(cursoIndex, 1);

  return res.status(200).json({newData: cursosAtualizados, dataRemoved:cursoRemovido });
});

app.listen(3333, () => {
  console.log(`Server is running at http://localhost:3333`);
});