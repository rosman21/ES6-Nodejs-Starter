import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/', function (req, res) {
  res.send('hello worlddddd')
})

export default router;
