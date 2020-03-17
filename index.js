const express = require('express')
var session = require('express-session')
const app = express()

PORT = 3000

app.set('view engine', 'ejs')
app.use('/', express.static('static'))

function render(view, req, res, data){
  res.render(view, Object.assign({
    sess: session,
    page: req.url,
    title: "Default",
    nav: {
      'Home': '/',
      'Page 2': '/page2',
      'Page 3': '/page3'
    }
  }, data), null, (err, str) => { if (err) console.error(err); else res.send(str) })
}

app.get('/', function (req, res) {
  render('index', req, res, {
      title: "Home",
      publics: []
  });
})

app.listen(PORT, function () {
  console.log(`App running on port ${PORT}`)
})
