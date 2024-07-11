const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/save', (req, res) => {
  const data = req.body;
  fs.writeFileSync('data.json', JSON.stringify(data));
  res.send('Données sauvegardées avec succès.');
});

app.get('/data', (req, res) => {
  const data = fs.readFileSync('data.json');
  res.send(JSON.parse(data));
});

app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});
//test