# React auto complete

Welcome dear internet user, it's great to have you here. You will find the instructions to run every part of the app in the following lines.

## Front end

I am using vite.js for the sake of faster builds, to make development easier than create react app, or even rollup configs or webpack configs.

The frontend stack are based on:

- React / TypeScript
- CSS modules
- Jest / @testing-library/react
- Hooks (to make our lives easier)

### React design patterns

I am using one of my favorite React design patterns, which is the compound component pattern, along with hooks, that makes the component development really great, and also, using a custom context and a custom forward ref, to share the HTML props for every component.

### Instructions

Here are the instructions to do actions like: install, test, and start.

#### Install

In your favorite terminal run:

`npm install` or `yarn install`

This script will install all the necessary dependencies for the project.

#### Test

In your favorite terminal run:

`npm run test` or `yarn test`

This script will run the test runner and will test all the component that has a test.

#### Start

In your favorite terminal run:

`npm run dev` or `yarn dev`

This script will start the project and you are going to be able to view the app in the `http://localhost:3000`

### Api

For the list of users displayed on the combobox list, I am fetching the data from:

[https://reqres.in/api/users?per_page=12](https://reqres.in/api/users?per_page=12)
