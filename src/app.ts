import express from 'express';
import bodyParser from 'body-parser';
import { generateReceipt } from './controllers/receipt.controller';

const app = express();
app.use(bodyParser.json());

app.post('/receipt', generateReceipt);

export default app;
