# deis-course-evaluation

## Description 

This is a course evaluation website for Brandeis students. The website allows students to search for courses and view the course evaluations. Students can also add courses to their list and view the list of courses they have added. This website is created in hope that it will be a useful tool for students to gain authnetic insights about the courses they are interested in. 

Checkout the website! [link](https://deiseval.com) 

	

Always welcome for any feedbacks and suggestions! email: deiseval26@gmail.com

## Features
**General**
- Advanced Search Bar : search by course name, course ID, department.
- Course Evaluation : view course evaluations from other users and submit your own evaluations
- Ratings: view analyzed data of the course such as: average rating, average grade, average difficulty, etc.
- Like button: upvote the comments that you agree with.
- Save button: save the course that you want to keep track on.
  

More features coming soon!

[comment]: # (**Sign In Features**)
[comment]: # (- User Authentication : sign in with username/password or google OAuth2.0)
[comment]: # (- Liked Courses : view the list of courses that you have liked)
[comment]: # (- Evaluations: view the evaluations that you have submitted)


## REST API Routes
### Course
- GET /api/courses - Get all courses
- GET /api/courses/:id - Get course by id
- GET /api/courses/reviews - Get all evaluations with the given course id
### Auth
 - POST auth/oauth/google - generate jwt token after login with google oauth2.0
 - POST auth/login - generate jwt token after login with username/password
 - POST auth/register - register a new user
 - DELETE auth/:id - delete the user from the database
 ### Evaluations
- POST api/evaluations/forms - Create a new evaluation submission
- GET api/evaluations - Get all evaluations
- POST api/evaluations/user - Get user evaluations with the given user id
- POST api/evaluations/likes - increment or decrement the likes of an evaluation
- GET api/evaluations/recent - retrieve the most recent reviews
### Liked Courses
- POST api/liked-courses - Get all liked courses with the given user id
- POST api/liked-courses/add - Add a new liked course
- POST api/liked-courses/remove - Remove a liked course
## Built With
- Node.js
- Express.js
- MongoDB
- Mongoose
- React.js


## Dev Setup 
### To generate the jsdoc documentation website
1. Check that you've installed jsdoc globally: `npm install -g jsdoc`
2. Run `npm run doc` in the root directory of the project
3. Open `docs/index.html` in your browser with live server
### To reformat the code
1. /frontend `npm run format`
## Start contributing
1. Clone the repo
2. Run `npm install` inside the /backend and /frontend directory of the project
3. Running the project: 
	- Run `npm start` in the /backend directory of the project
	- Run `npm run dev` in the /frontend directory of the project
4. Please email deiseval26@gmail.com for the .env files
