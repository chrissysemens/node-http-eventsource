const http = require("http");

http
  .createServer((request, response) => {
    if (request.url === "/refresh") {
      response.writeHead(200, {
        Connection: "keep-alive",
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Origin": "*"
      });
     
      setInterval(() => {
        response.write("event: refresh\n");
        response.write('data: {}');
        response.write("\n\n");
      }, 30000);
    } else {
      response.writeHead(404);
      response.end();
    }
  })
  .listen(5000, () => {
    console.log("Server running at http://127.0.0.1:5000/");
  });