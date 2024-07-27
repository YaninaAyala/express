import express from "express";
import db from "./database/db.json";

const PORT = 8080;
const app = express();

app.get("/api", (request, response) => {
  response.status(200).json(db.description);
});

app.get("/api/students", (request, response) => {
  response.status(200).json(db.students);
});

app.post("/api/students", (request, response) => {
  response.status(201).json({message: "SE CREÓ EL RECURSO"});
});

// app.get("/api/students/id", (request, response) => {
//   response.status(200).json(db.students);
// });

// app.get("/api/students/id/grades", (request, response) => {
//   response.status(200).json(db.students);
// });

app.get("/api/teachers", (request, response) => {
  response.status(200).json(db.teachers);
});

// app.post("/api/teachers", (request, response) => {
//   response.status(200).json(db.teachers);
// });

// app.patch("/api/teachers", (request, response) => {
//   response.status(200).json(db.teachers);
// });

app.listen(PORT, () => {
  console.log("Server listening on port: ", PORT);
});
