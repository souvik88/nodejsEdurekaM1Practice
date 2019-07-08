const express = require('express');
const PORT = 3000;
const app = express();
let tasks = [
    "Learn JavaScript",
    "Learn Nodejs",
    "Learn Testing",
    "Learn React",
    "Learn Angular"

];
app.get('/', function(req, res) {
    res.send('<h1>Hello World!</h1>');
});
app.get('/tasks', function(req, res) {
    res.json(tasks);
});
app.get('/get-random-tasks', function(req, res) {
    const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
    res.send(randomTask);
})
app.listen(PORT, function() {
    console.log("App is listening to the port number " +PORT);
});