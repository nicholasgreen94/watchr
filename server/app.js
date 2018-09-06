// requiring dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// defining the server
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 3001;

// a test route for now; we can delete this later
app.get('/status', (req, res) => {
  res.send({
    message: 'Server online',
    port: `${PORT}`,
  });
});

// initializing the server
/* eslint no-console: 0 */
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
