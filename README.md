![banner](https://github.com/user-attachments/assets/5266a138-9d89-46a5-8b11-e6e16486ed9b)

# :school: deiseval
This is a course evaluation website for Brandeis students that I created as my first full stack project during the summer of sophomore year. I didn't want this to be a project that lives on localhost, I wanted it to be something that people can interact with. This website is created in hope that it will be a useful tool for students to gain authentic insights about the courses they are interested in. 



## Sunsetted

In April of 2024, I received $2200 in funding from [ain family startup award](https://www.brandeisstartup.com/projects/deis-eval) to continue developing and revamping an improved user interface. I was later reached out by the univeristy provost to collaborate with the school's [ITS department](https://www.brandeis.edu/its/). 

200+ users and 40+ reviews later, I have decided to pause my efforts in continuing this project in November of 2024 due to the reasons below:

- This project poses a conflict of interest with Brandeis' evaluation system. After a discussion with 10+ professors, the ITS department, acadmeic services, and follow up emails, the conclusion was to integrate deiseval into the existing evaluation system, which doesn't align with my original plans for the project. 
- I want to shift my focus in expanding my skill set and diving deeper into topics that I'm interested in, I also joined an early stage startup and I want to maximize my experience as an intern. 

This project has taught me a lot and brought me a lot of experiences that I would never had thought of, but we move. :) 


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

- **Search courses**: deiseval contains all the courses that were taught from 2017-2023, scraped with a custom scraper that I made [here](https://github.com/MingCWang/deiseval-scraper).


https://github.com/user-attachments/assets/d145be23-7c16-4281-ac99-af842a43ce89


_Actions below requires user login with Brandeis credentials_


- **Rate a course**: After searching for a course, you can either add it to your list or rate it by clicking on the 'rate this course' button.

https://github.com/user-attachments/assets/4d389d3c-9b7a-4e5b-bab8-0f2bbf58d2fa

- **Edit ratings**: You can edit your ratings after submission by clicking on the button on the top right of the rating card.
  
- **View past reviews**: Click on the profile button to see all your liked courses and ratings
  

https://github.com/user-attachments/assets/3aab5d9a-f37d-4ed1-8543-0abaebd98b10


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
   
## :last_quarter_moon: REST API Routes

<details>
<summary>Click to expand</summary>
  
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
</details>

### [How to contribute?](./CONTRIBUTING.md)

