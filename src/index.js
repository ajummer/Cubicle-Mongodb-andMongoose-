const express = require("express");
const handlebarsConfig = require("./config/handlebarsConfig.js");
const expressConfig = require("./config/expressConfig.js");
const { port } = require("./constans.js");
const routes = require("./router.js");

// local variables
const app = express();

// app configs
handlebarsConfig(app);
expressConfig(app);

// Routing
app.use(routes);

app.listen(port, () => console.log(`Server is listening at port ${port}`));
