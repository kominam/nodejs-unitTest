import express from 'express';
import chalk from 'chalk';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './routes/web';

const PORT = process.env.PORT || 8000;
const MONGODB_URI = 'mongodb://localhost:27017/todos-ex'
mongoose.connect(
  MONGODB_URI, {
      useMongoClient: true
  }
);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// router
app.use('/', router);

app.listen(8000, () => {
  console.log('%s I am ready to serve\n',
              chalk.green('✓'));
  console.log('-> Press CTRL-C to stop\n');
})

export default app;
