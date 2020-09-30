const express = require('express');
const ejs = require('ejs');

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render("landing");
});

app.get('/categories', (req, res) => {
  res.send("Categories page");
});

app.get('/login', (req, res) => {
  res.send("Login page");
});

app.get('/signup', (req, res) => {
  res.send("Sign up page");
});

app.get('*', (req, res) => {
  res.send("Page not found");
});

app.listen(8000, () => {
    console.log('================================\n   App listening on port 8000\n================================');
});