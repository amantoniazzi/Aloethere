const express = require ('express');
const cors = require ('cors');
const morgan = require ('morgan');
const router = require ('./router');

const PORT = 3001;

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.static('public'))
app.use(express.json());
app.use(router);

if (!module.parent) {
  app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`); //eslint-disable-line
  })
}

module.exports = app;