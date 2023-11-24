
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import fs from 'fs';

// dotenv.config();
console.log(process.env.MONGODB_URL)
/**
 * Set up mongodb connection and start the server
 */
mongoose.
	connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/course-eval', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log(`mongodb is connected on location: ${mongoose.connection.host}:${mongoose.connection.port}`);
		uploadData();
		// modifyFields();


	})
	.catch((err) => {
		console.log(`mongodb connection failed ${err}`);
	});

// upload mock data

import Course from './models/course.js';
import EvalForm from './models/evalForm.js';
import User from './models/user.js';
import courseData from './data/modified.json' assert { type: 'json' };

const data = courseData.courses;

async function modifyFields() {
	let keyMapping = {
		"description": "courseDescription",
		"instructor": "professors",
	}

	
	let modifiedData = [];
	console.log('Modifying data...')	
	for (let course in data) {
		let modifiedCourse = {};
		for (let key in data[course]) {
			if (keyMapping[key]) {
				modifiedCourse[keyMapping[key]] = data[course][key];
			} else {
				modifiedCourse[key] = data[course][key];
			}
		}
		modifiedData.push(modifiedCourse);
		// console.log(modifiedData)
	}
	const jsonString = JSON.stringify(modifiedData, null, 2); // Use null and 2 for pretty formatting

	// Specify the output file path
	const outputPath = './data/modified.json'; // Change this to your desired file path

	// Write the JSON string to the output file
	fs.writeFileSync(outputPath, jsonString, 'utf-8');

	process.exit();
}

async function uploadData() {
	try {
		await Course.deleteMany({});
		await EvalForm.deleteMany({});
		await User.deleteMany({});
		await Course.insertMany(data);
		console.log('Data import success');
		process.exit();
	} catch (error) {
		console.error('Error with data import', error);
		process.exit(1);
	}
};


