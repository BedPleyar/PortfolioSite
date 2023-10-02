import express from 'express';
import mongoose from 'mongoose';
console.log('Hello');

const PORT = 3000;
const app = express();

// routes
app.get('/', (req: any, res: any) => {
  res.send('Hello Node API');
});

mongoose
  .connect(
    'mongodb+srv://admin:Supergreatpassword1%21@pdrahelper.joeldgn.mongodb.net/Portfolio?retryWrites=true&w=majority',
  )
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Node API app is running on ${PORT}`);
    });
  })
  .catch((error: any) => console.log(error));
