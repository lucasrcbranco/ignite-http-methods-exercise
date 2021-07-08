const express = require('express');
const app = express();
app.use(express.json());

let courses = [
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
  return res.status(200).json(courses);
});
app.post('/courses', (req, res) => {
  const {name, duration} = req.body;
  courses.push({name, duration});
  return res.status(201).json(courses);
});
app.put('/courses/:name', (req, res) => {
  const {name} = req.params;
  const {newName} = req.body;
  const course = courses.find(course => course.name.toLowerCase() === name);
  course.name = newName;
  return res.status(201).json(course);
});
app.patch('/courses/:name', (req, res) => {
  const {name} = req.params;
  const {newName} = req.body;
  const course = courses.find(course => course.name.toLowerCase() === name);
  course.name = newName;
  return res.status(201).json(course);
});
app.delete('/courses/:name', (req, res) => {
  const {name} = req.params;
  const courseIndex = courses.findIndex(curso => curso.name.toLowerCase() === name);
  const removedCourse = courses.find(curso => curso.name.toLowerCase() === name);
  const updatedCourses = courses.splice(courseIndex, 1);

  return res.status(200).json({newData: courses, dataRemoved:removedCourse });
});

app.listen(3333, () => {
  console.log(`Server is running at http://localhost:3333`);
});