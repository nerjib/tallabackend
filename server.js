/* eslint-disable no-console */

const dotenv = require('dotenv');


dotenv.config();

const PORT = process.env.PORT || 5000;

const app = require('./app');

app.listen(PORT, () => console.log(`server starting on port ${PORT}!`));