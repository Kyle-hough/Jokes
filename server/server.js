const express = require('express');
const app = express();

//config mongoose
require("./configs/mongoose.config")

// config express
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routes & logic
require("./routes/jokes.routes")(app)

// listen to port 
app.listen(8000, () => console.log('listening on http://localhost:8000'))