const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 3000; // Correção na definição da porta

// Middleware para permitir o parse do corpo das requisições
app.use(bodyParser.json());

// Middleware para configurar o CORS
app.use(cors());

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const db = new sqlite3.Database('database.db');

  // Busca o usuário com o email fornecido no banco de dados
  db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
    if (err) {
      console.error('Erro ao buscar usuário no banco de dados', err.message);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }

    if (!row) {
      return res.status(401).json({ error: 'Usuário não encontrado' });
    }

    // Verifica se a senha corresponde à senha armazenada no banco de dados
    if (password === row.password) {
      // Se as credenciais estiverem corretas, retorna um token de autenticação
      res.json({ token: 'token_de_autenticacao_gerado_pelo_backend' });
    } else {
      // Se as credenciais estiverem incorretas, retorna um erro
      res.status(401).json({ error: 'Credenciais inválidas' });
    }
  });

  db.close();
});

// Rota para registrar um novo usuário
app.post('/register', (req, res) => {
  const { email, password } = req.body;

  const db = new sqlite3.Database('database.db');

  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  )`, function (err) {
    if (err) {
      console.error('Erro ao criar a tabela users', err.message);
      return res.status(500).json({ error: 'Erro ao cadastrar usuário' });
    }

    console.log('Tabela users criada com sucesso');

    // Verificar se o e-mail já está em uso
    db.get('SELECT id FROM users WHERE email = ?', [email], (err, row) => {
      if (err) {
        console.error('Erro ao verificar o e-mail no banco de dados', err.message);
        return res.status(500).json({ error: 'Erro ao cadastrar usuário' });
      }

      if (row) {
        console.error('E-mail já está em uso');
        return res.status(400).json({ error: 'E-mail já está em uso' });
      }

      // Se o e-mail não estiver em uso, inserir o usuário no banco de dados
      db.run('INSERT INTO users (email, password) VALUES (?, ?)', [email, password], function (err) {
        if (err) {
          console.error('Erro ao inserir usuário no banco de dados', err.message);
          return res.status(500).json({ error: 'Erro ao cadastrar usuário' });
        }

        console.log('Usuário cadastrado com sucesso! ID', this.lastID);
        res.json({ message: 'Usuário cadastrado com sucesso!' });
      });
    });
  });

  db.close();
});



// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
