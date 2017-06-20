# React Progress Bar

[![Build Status](https://travis-ci.org/psenger/react-progress-bar.svg?branch=master)](https://travis-ci.org/psenger/react-progress-bar)
[![Coverage Status](https://coveralls.io/repos/github/psenger/react-progress-bar/badge.svg?branch=master)](https://coveralls.io/github/psenger/react-progress-bar?branch=master)

Written by Philip A Senger

[philip.a.senger@cngrgroup.com](mailto:philip.a.senger@cngrgroup.com) | mobile: 0404466846 | [CV/Resume](http://www.visualcv.com/philipsenger) | [blog](http://www.apachecommonstipsandtricks.blogspot.com/) | [LinkedIn](http://au.linkedin.com/in/philipsenger) | [twitter](http://twitter.com/PSengerDownUndr) | [keybase](https://keybase.io/psenger)

## TOC

* [Active Websites](#active-websites)
* [Environment Variables](#environment-variables)
* [Available Scripts for Command Line](#available-scripts-for-command-line)
* [Technologies used](#technologies-used) 
* [Requirements](#requirements)
* [Developer Notes](#developer-notes)
* [Known Issues](#known-issues)

## Active Websites

* [Click here to see a live website in action](http://react-progress-bar.s3-website-ap-southeast-2.amazonaws.com/)
* [Click here to see the JavaScript Documentation](https://psenger.github.io/react-progress-bar/)
* [Evidence of testing with BrowserStack](https://youtu.be/olnYyrwJpvg)

## Environment Variables

| Mandate  | Name      | Purpose | ex |
|:---------|:----------|:--------|:---|
| required | API_URL   | The base Url to the hosted api server. If not set, it assumes localhost | [prod](https://simple-example-cars.herokuapp.com/api/v1/)  |
| required | PUBLIC_URL| The Url to the public html server. Values will be embedded into the processed HTML. | [prod](http://react-progress-bar.s3-website-ap-southeast-2.amazonaws.com/) |
| required | NODE_ENV  | When you deploy, you should set this to 'production'. This will turn off the Redux Logger. | `export NODE_ENV=production`  |


## Available Scripts for Command Line

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

## Technologies used

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and uses the following technologies

* ReactJS
* Redux
* Redux-Saga
* Immutable
* WebPack
* Jest
* Fetch ( polyfilled )
* WCAG 2.0 AA

## Requirements

* Must read data from the endpoint.
* Multiple bars.
* One set of controls that can control each bar on the fly.
* Can't go under 0.
* Can go over 100%, but limit the bar itself and change its colour.
* Display usage amount as a percentage, centered on each bar.
* Write tests for your code (hint: TDD strongly preferred).
* Implement a responsive solution: testing it on mobile, tablet, etc. Getting it working nicely.
* Animate the bar change, make sure it works well when you tap buttons quickly.
* Version control.
* Setting it up as a project.
* Setting up some automated tools.
* Linting, code quality, etc.
* Comment code.
  
## Developer Notes

Im pretty happy with these results. If I could get time to do a few more things:

* spend more time on the tests, they are not up to my standards.    
* I would use a third party for the widgets or create my own component library to reuse these.
* get the App.js spec test running, its just to hard to figure out how to wire the whole thing together.
* I would add night watch to dial up Browser Stack to run end to end tests on all the browsers.
* spend more time on the docs.


