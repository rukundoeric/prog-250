/* eslint-disable no-console */
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('it is working');
});
// something

app.listen(5000, () => console.log('Listening on port', 5000));
export default app;
