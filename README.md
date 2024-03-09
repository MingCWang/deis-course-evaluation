# :school: deiseval

This is a course evaluation website for Brandeis students. The website allows students to search for courses and view the course evaluations. Students can also add courses to their list and view the list of courses they have added. This website is created in hope that it will be a useful tool for students to gain authnetic insights about the courses they are interested in. 

### [How to contribute?](#-contributing)

## 📦 Technologies

- `Vite`
- `React.js`
- `CSS`
- `Express.js`
- `Node.js`
- `MongoDB`
- `Selenium`
- `PostgreSQL`

## 🦄 Features

Here's what you can do with deiseval:

- **Search courses**: deiseval contains all the courses that were taught from 2017-2023

_Actions below requires user login with Brandeis credentials_

- **Rate a course**: After searching for a course, you can either add it to your list or rate it by clicking on the 'rate this course' button.

- **Edit ratings**: You can edit your ratings after submission by clicking on the button on the top right of the rating card.
  
- **View past reviews**: Click on the profile button to see all your liked courses and ratings
  

## 👩🏽‍🍳 The Process

I have never created a full-stack website before, so I started by learning what an HTTP request is and how to create API routes with Express.js  Then, I focused on creating the user interface with Figma.

Next, I already knew a little bit about React.js, so I started developing the front end of the website. 

To make sure the project environment doesn't turn into chaos, I learned how to structure a full-stack project in a mono-repo style and how to use linters.

Most of the styled components were written with vanilla CSS, so I quickly realized that a single CSS file would be a nightmare. So I learned how to use CSS modules.

To integrate user authentication, I created a testing project to make sure I understand the Oauth2.0 authentication flow.

Finally, I completed the minimum viable product! 


## 📚 What I Learned

During this project, I've learned everything from scratch which taught me the skill to solve problems on my own and logical thinking. 

- Creating the `useContext` hook taught me to think about how to manage states and store information throughout the application, I had to really understand when to use `useState` `useRef` or local storage and cookies.

- Setting up OAuth2.0 taught me how a user is authenticated with a private key and public key, and how can API routes be protected from bad intentions.

- Getting the course data taught me how to use `Selenium` extract data and `postgreSQL` to store and clean up the data for the website.

- Creating the database model helped me learn how to documents should interact with each other.

- Deploying the project through AWS Elastic Beanstalk taught me how HTTPS works and what S3 and EC2 are. (Currently hosting through render because I exceeded the limit)

- I learned that there is no such thing called the best stack, React is not perfect, and in order to be a software engineer I need to learn how to adapt to different technologies. 


Each part of this project helped me understand more about building apps, managing complex information, and improving user experience. It was more than just making a tool. It was about solving problems, learning new things, and improving my skills for future work.

## 💭 How can it be improved?

- A more intuitive search bar
- Better user flow, the blank search bar might confuse users when first visiting the website
- Profile dropdown requires clicking on the profile button to retract, make it so users can click anywhere to close it. 

##  🔨 Contributing

To run the project in your local environment, follow these steps:

1. Clone the repo
2. Run `npm install` inside the `/backend` and `/frontend` directory of the project
3. Run `npm run dev` in the `/backend` and `/frontend` directory of the project

See the [contributing guide](./CONTRIBUTING.md) for more technical details on contributing
   
## :last_quarter_moon: REST API Routes

<details>
<summary>Click to expand</summary>
  
### Course
- GET /api/courses - Get all courses
- GET /api/courses/:id - Get course by id
- POST /api/courses/reviews - Get all evaluations with the given course id
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
</details>


