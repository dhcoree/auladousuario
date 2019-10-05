const express    = require('express'),
      path       = require('path'),
      bodyParser = require('body-parser')

const app = express()

let count = 1

app.use(bodyParser.json())

app.post('/api/request', (req, res) => {
  console.log(`IP: ${req.headers['x-forwarded-for'] || req.connection.remoteAddress}`);
  console.log(req.body)
  res.json({ test: `ola do servidor | ${count} x` })
  count++
})
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'))
})

app.listen(8000, () => console.log('Rodando na porta 8000'))
