const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// connect to database
mongoose.connect(process.env,MONGO_URI)
    .catch(error => handleError(error));

// Middleware    
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('Task Management system');
});




app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
