import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json())
app.use(routes); // define routes last always


app.listen(3000, () => console.log('Example app listening on port 3000!'))