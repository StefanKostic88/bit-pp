//Server side JS

const http = require("http"); //objekat uz pomoc kojeg kreiramo server

const hostname = "127.0.0.1"; //host name

const port = 3000; //port

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/user") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "json");
    res.end('{"name": "Jhon"}');
    return;
  }
  res.statusCode = 404;
  res.end('{"message": "Not found"}');
}); //request i response

server.listen(port, hostname, () => {
  console.log("Server Running");
});
