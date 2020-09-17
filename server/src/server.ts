import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: 'Hello world' });
});

//localhost:3333
app.listen(3333); //listen HTTP request
