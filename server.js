require("dotenv").config();
const app = require("./src/app.js");

const port = process.env.PORT;

app.listen(port, () => console.log(`The server is running on post ${port}`));
