
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/UserRoutes.js';
import financeRoutes from './routes/financeRoutes.js';
import incomeRoutes from './routes/incomeRoutes.js'
import dotenv from 'dotenv';
import connectDb from './db.js'

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use('/api/users', userRoutes)
app.use('/api/finance', financeRoutes);
app.use('/api/income', incomeRoutes);




// mongoose.connect(process.env.MONGO_URL).then(() => {
//   app.listen(port, () => console.log('Server running on port 3000'));
// });

app.listen(port, () => {
    console.log('Listening on port: ' + port)
    connectDb()
})
