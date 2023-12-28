
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import fs from 'fs';

dotenv.config();
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
		// sortCourses();
	})
	.catch((err) => {
		console.log(`mongodb connection failed ${err}`);
	});

// upload mock data

import Course from './models/course.js';
import EvalForm from './models/evalForm.js';
import User from './models/user.js';
import courseData from './data/sorted.json'  assert { type: 'json' };

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


// Function to extract course code and number
function extractCourseParts(course) {
	const match = course.match(/^([A-Za-z]+)\s*(\d+)([A-Za-z]*)$/);
	if (match) {
	  return {
		code: match[1],
		number: parseInt(match[2], 10),
		suffix: match[3]
	  };
	}
	return null;
  }
  
function sortCourses() {
	// Custom sort function
	data.sort((a, b) => {
		const courseA = extractCourseParts(a.course);
		const courseB = extractCourseParts(b.course);
	
		if (!courseA || !courseB) {
		return 0; // Handle courses with invalid or missing codes
		}
	
		// First, compare by course code
		if (courseA.code < courseB.code) return -1;
		if (courseA.code > courseB.code) return 1;
	
		// Then, compare by course number
		if (courseA.number < courseB.number) return -1;
		if (courseA.number > courseB.number) return 1;
	
		// Finally, compare by any suffix (like 'A' in '104A')
		if (courseA.suffix < courseB.suffix) return -1;
		if (courseA.suffix > courseB.suffix) return 1;
	
		return 0; // Equal courses
	});
	
	// console.log(data); // Sorted data
	const jsonString = JSON.stringify(data, null, 2); // Use null and 2 for pretty formatting	
	// Specify the output file path
	const outputPath = './data/sorted.json'; // Change this to your desired file path
		// Write the JSON string to the output file
	fs.writeFileSync(outputPath, jsonString, 'utf-8');

	process.exit();
}