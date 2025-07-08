const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('🎉 AIDEAS backend is working!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
