This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Animated portfolio
[Online demo](https://react-animate-2.now.sh/)

Online portfolio. 
The goal was to create this with a lot of stunned animations (from the client's point of view)

I used styled components and react transitions to implement changes.


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

Displayed projects are stored in **src/config.js**
(this behaviour can be changed to use external .json file, or some api)


**warning with pdf in console while dev**

This is the issue of react-pdf viewer which seems to be fixed soon https://github.com/wojtekmaj/react-pdf/issues/280
