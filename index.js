const express = require("express");
const comments1 = require("./routes/comments")
const contacts1 = require("./routes/contacts")
const products1 = require("./routes/products")
const vehicles1 = require("./routes/vehicles")
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

app.use(comments1);
app.use(contacts1);
app.use(products1);
app.use(vehicles1);
