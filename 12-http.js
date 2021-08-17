const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Bienvenido a nuestra pagina de inicio");
  }
  if (req.url === "/about") {
    res.end("Aquí puedes ver un pequeño resumen de nuestra historia");
  }
  res.end(`
  <h1> Oops!</h1>
  <p>No hemos podido encontrar la página que está buscando</p> 
  <a href= '/'> back home</a>
`);
});

server.listen(5000);
