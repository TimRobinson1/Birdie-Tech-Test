Birdie Tech Test
==============
[View the live version](https://tim-robinson-birdie-12-18-cehhryequc.now.sh/)


Description
-----------
The goal of this exercise is to create a small web application that visualises database data.

The application should allow a user to select a column from a set of data, then display, for each different value in this column, the number of lines with this value, and the "age" value average. Values are sorted by decreasing order and display only the first 100 values.

Specified requirements
------------
* Application must be a SPA (Single-Page Application), i.e. user must be able to change
variable without reloading page.
* If more than 100 different values, indicate the number of non-displayed values.

Quickstart guide
---------------
* Clone the repo to your local device, using `git clone https://github.com/TimRobinson1/Birdie-Tech-Test.git`
* Navigate into the repo using `cd birdie-tech-test`
* Run `npm install`
* Create an `.env` file to suit your needs and connect your desired MySQL database, following the example of the provided `.env.example` file.

### Local development
To start up a local version for development, run `npm run dev`.

### Running the tests
* To run the unit tests, use `npm run test:unit`.
* To run the automated browser tests, use `npm run test:automated`. **Note:** Depending on whether you want to use a local database for these tests or not, you may need to set up a MySQL database. You can get started [here](https://dev.mysql.com/doc/mysql-getting-started/en/).
* To test for type errors, use `npm run test:flow`
* Alternatively, if you wish to run all of these in sequence, simply use `npm run test`

### Production build
If you wish to create and run a production build of the app, use `npm build && npm start`

Technologies used
------------
* [React](https://reactjs.org/) - for UI
* [Redux](https://redux.js.org/) - for managing state
* [Redux-Saga](https://redux-saga.js.org/) - for handling redux side-effects
* [Flow](https://flow.org/) - for static typing
* [Aphrodite](https://github.com/Khan/aphrodite) - for styling
* [Knex](https://knexjs.org/) - for database interactions
* [Jest](https://jestjs.io/) - for testing
* [Puppeteer](https://pptr.dev/) - for automated browser testing
* [Enzyme](https://airbnb.io/enzyme/) - for component testing
* [Babel](https://babeljs.io/) - for code compilation

Development Goals
-------------
* Clearly defined and reusable components.
* Clean, well-tested and [grokkable](https://en.wikipedia.org/wiki/Grok) code.
* Simple but effective page layout and styling that's robust enough to handle errors neatly.
* Modular pieces of code that do one thing and do it well.

Development notes
-------------
My initial approach to this app was to plan out what I wanted the interface to look like and how the data would interact with it. To get up and running quickly, it made the most sense to start with [create-react-app](https://facebook.github.io/create-react-app/).

Although I initially considered an implementation where the user would be able to toggle row numbers and choose how many rows get rendered, this introduced a time distraction and I ultimately decided not to add them as I wanted to stay focused on the main goal of the app.

I chose my tech primarily based on the tools that I thought would be very effective at what they do, and would help me create a clean, easy-to-understand codebase. **Aphrodite**, as an example, is a CSS-in-JS option, which I chose because I see it as meaning that less dev time is spent content-switching between two syntaxes, and that styles can be shared in a unified, intuitive way.

The app has been designed in a way that is intended to be expandable and effective at scale. Use of components such as `Text` as wrappers around common text types (`p`, `span`, `h1` etc.) means that it's simple to give them a scalable, single-source-of-truth design.
