const { request, response } = require('express');
const express = require('express');

const app = express();

app.use(express.json())

app.listen(3333);

app.get("/courses", (request, response) => {
    // o querry mostra oq tem depois do ? na rota ou na querry
    const querry = request.query
    console.log(querry)
    return response.json(['Curso 1', 'Curso 2', 'Curso 3'])
})
app.post("/courses", (request, response) => {
    const body = request.body;
    console.log(body)
    return response.json(['Curso 1', 'Curso 2', 'Curso 3'])
})

app.put("/courses/:id", (request, response) => {
    // pega o :id
    const params = request.params;
    const { id } = request.params;
    console.log(params, id)
    return response.json(['Curso 6', 'Curso 2', 'Curso 3'])
})
app.patch("/courses/:id", (request, response) => {
    return response.json(['Curso 1', 'Curso 7', 'Curso 3'])
})
app.delete("/courses/:id", (request, response) => {
    return response.json(['Curso 1', 'Curso 7', 'Curso 3'])
})
