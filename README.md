This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

In the project directory:

### `npm install`

run once to install dependencies

### `npm start`

Launches the test runner in the interactive watch mode.

### `npm build`

Creates a production build which you can upload to server

##Notes:

**Configuration**

Variables like **path to pdf** or **Upcoming** text stored in **src/config.js** 

**/architecture**

Displayed file is /public/assets/portfolio.pdf

**/software**

Displayed projects are hardcoded in src/Pages/Software.jsx,
because in descriptions could be tags and it's easier to create texts there,
than in .json file.

(this behaviour can be changed to use external .json file, or some api)
