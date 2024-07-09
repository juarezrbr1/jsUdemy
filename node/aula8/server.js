const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

// query = ?parametro=valor

app.get('/teste/:id_usuario?/:parametro?', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(req.params);
})

app.post('/', (req, res) => {
  console.log(req.body);
  console.log(req.body.nome);
  res.send('Nome recebido');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});