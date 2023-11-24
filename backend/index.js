
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/index.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// dotenv.config();
const app = express();
const PORT = process.env.PORT || 8081;

// console.log(process.env.MONGODB_URL)

const corsOptions = {
	origin: 'https://deis-evaluation.onrender.com',
	optionsSuccessStatus: 200 
  }
/**
 * Middlewares
 */

// app.use(cors(corsOptions));  // production
app.use(cors()) // development

app.use(morgan('dev'));
// app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
/**
 * Set up mongodb connection and start the server
 */
// mongoose.
// 	connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/course-eval', {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	})
// 	.then(() => {
// 		console.log(`mongodb is connected on location: ${mongoose.connection.host}:${mongoose.connection.port}`);
// 		app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
// 	})
// 	.catch((err) => {
// 		console.log(`mongodb connection failed ${err}`);
// 	});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index')
	})


app.use('/', router);

