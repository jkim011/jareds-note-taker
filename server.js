// Dependencies 
const express = require('express');
const fs = require('fs');
const path = require('path');

// PORT and establishing express
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Calls the exported functions
apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
