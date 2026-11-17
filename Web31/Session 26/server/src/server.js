const app = require("./app");
const config = require("./config");
require("./db"); // Initialize the SQLite database before accepting requests.

app.listen(config.port, "0.0.0.0", () => {
  console.log(`Todo API is running at http://localhost:${config.port}`);
});
