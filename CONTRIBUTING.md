# Contributing Guide

I'm really glad you're reading this, because we need all the we can get to help make this a perfect platform for Brandeis.

If you haven't already, go follow our 

  * [Linkedin](https://www.linkedin.com/company/deiseval/) 
  * [Instagram](https://www.instagram.com/deis_eval/) (for faster responses!)

Here are the links to some important resources:

  * [Trello](https://trello.com/b/bx6rja3O/deis-course-evaluation) tells you what we're working on!
  * [Figma](https://www.figma.com/file/aZmhk3pPxpaw6U8HvfMflz/deiseval?type=design&mode=design&t=VIeafslIWMOlRgKJ-0) is where the draft of the new design reside. (under construction)
  * [Figma Archive](https://www.figma.com/file/lMYyNOptCmZb5JlYXmKkif/CourseEvaluation?type=design&node-id=0-1&mode=design&t=xekzqwc36H9CNiwg-0) is the first version of the interface, some of the features still uses it.



Contributing to `deiseval` is fairly easy. This document shows you how to get the source, how to test and build it and how to contribute to the project.

## Dependencies

To make sure that the following instructions work, please install the following dependencies
on you machine:

- Node.js (comes with a bundles npm)
- Git

## Installation

To get the source of `deiseval`, clone the git repository via:

````
$ git clone https://github.com/MingCWang/deiseval.git
````

This will clone the complete source to your local machine. Navigate to the project folder both `/frontend` and `/backend`
and install all needed dependencies via **npm**:

````
$ npm install
````

This commands installs everything which is required for building and testing the project.

## Testing
still under construction

## Developing

### `npm run dev` in `/frontend` and `/backend`
This task provides a simple http server on port `5173` and `8081` for the server. If you start it on your machine, you have access to the project's demos.

Example: `http://localhost:5173/`

We use a complete [Express](http://expressjs.com/) server stack. You will
find the server code in the `/backend` folder. And [React](https://react.dev/) for the `/frontend`.

## Contributing/Submitting changes

- Check out a new branch and name it to what you intend to do:
 	````
    $ git checkout -b <fix/feature>/<Name of feature or bug>
    ````
  - Example:
   	````
    $ git checkout -b feature/sidebar
    ````
   
  - Use one branch per fix/feature
- Make your changes
  - Make sure to run `npm run format` before committing your changes.
- Commit your changes
  - Please provide a git message that explains what you've done.
	Always write a clear log message for your commits. One-line messages are fine for small changes, but bigger changes should look like this:

		$ git commit -m "A brief summary of the commit
		> 
		> A paragraph describing what changed and its impact."
- Make a pull request
	- Please send a [GitHub Pull Request to deiseval](https://github.com/MingCWang/deiseval/compare) with a clear list of what you've done (read more about [pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)). 

If you follow these instructions, your PR will be reviewed and merged in no time.

## Coding conventions

Start reading our code and you'll get the hang of it. We optimize for readability:

  * We avoid API request logics in components and pages, instead we create custom hooks in `frontend/src/services` to handle them.
  * This is open source software. Consider the people who will read your code, and make it look nice for them. It's sort of like driving a car: Perhaps you love doing donuts when you're alone, but with passengers the goal is to make the ride as smooth as possible.
  * We use `prettier` to enforce our coding conventions. Run `npm run format` to check your code before you commit it.


## Submitting issues

If you find a bug or have a feature request, please open an issue [here](https://github.com/MingCWang/deiseval/issues/new)

