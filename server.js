const express = require('express');
   const bodyParser = require('body-parser');

   const app = express();
   app.use(bodyParser.json());

   const PORT = process.env.PORT || 3000;

   // Start the server
   app.listen(PORT, () => {
   });