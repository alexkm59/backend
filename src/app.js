const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require ('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const bookRouter = require('./routes/books');
const loggerOne = require('./middlewares/loggerOne');
const loggerTwo = require('./middlewares/loggerTwo');

dotenv.config();
const { PORT = 3002, 
        API_URL = "http://127.0.0.1",
        MONGO_URL = "mongodb://localhost:27017/backend"
      } = process.env;

mongoose.connect(MONGO_URL).then(console.log('Connected to MongoDb')).catch(error => console.log(error));

const app = express();

const logMethodMiddleware = (req, res, next) => {
  console.log('Request URL:', req.originalUrl);
  next();
};

app.use('/', logMethodMiddleware);
// const helloWorld = (request, response) => {
//   response.status(200);
//   response.send(`Hello, World!`);
// };
app.use(cors());
app.use(loggerOne);
app.use(bodyParser.json());

// app.get("/", helloWorld);

// app.post("/", (request, response) => {
//   response.status(200);
//   response.send(`Hello from POST!`);
// });



app.use(userRouter);
app.use(bookRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});
