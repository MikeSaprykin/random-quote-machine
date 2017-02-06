# Random Quote Machine

## Introduction

Random Quote machine Task from [FreeCodeCamp](https://www.freecodecamp.com/challenges/build-a-random-quote-machine)
I've spent preatty much time in Quotes object each with unique styling.
On click on the next button, you'll spin the box and get another unique motivation quote.
There are 50 quotes.
See built and runnig up on my pages [here](http://mikesaprykin.github.io/random-quote-machine/)
> This is an updated project. My original project on [codepen](http://codepen.io/mikesaprykin/pen/YqZZep)

## Software stack:

#### To run this project we are using next technologies:

* HTML 5
* CSS 3
* [Webpack ^2.2.1](https://webpack.js.org/)

## Project structure:

````
.
├── README.md                                 * Readme of the project
├── config                                    * Folder with webpack configs
│   ├── helpers.js                            * Webpack helpers scripts file
│   ├── karma-test-shim.js                    * Karma unit testing entry
│   ├── karma.conf.js                         * Karma unit testing config
│   ├── webpack.common.js                     * Webpack common config for all builds
│   └── webpack.test.js                       * Webpack test config
├── docs                                      * Folder for github pages deployment
│   ├── dist                                  * Folder with built scripts
│   │   ├── app.js                            * Bundled js scripts
│   │   └── style.css                         * Bundled styles
│   └── index.html                            * Bundled index.html                              
├── karma.conf.js                             * Karma config entry
├── package.json                              * NPM dependencies package and scripts file
├── src                                       * Folder with all source development files
│   ├── app                                   * Folder with all scripts and assets for development
│   │   ├── app.spec.js                       * app.js testing file (empty for now)
│   │   ├── assets                            * development assets folder
│   │   │   └── css                           * development styles folder  
│   │   │       └── style.css                 * development styles.css
│   │   ├── flip-listener.js                  * File with flip container configurations
│   │   ├── message-generator.js              * Main file with message generator functions
│   │   ├── quotes.js                         * Array of motivational quotes objects
│   │   ├── twitter.js                        * Bootstrap twitter widget file
│   │   └── utils.js                          * File with utils functions
│   ├── index.html                            * development index.html template entry
│   └── index.js                              * development js entry
└── webpack.config.js                         * webpack config entry
````
    
## Quick start:

#### Make sure you have Node version >= 5.0 and NPM >= 3
    
```bash
# clone our repo
git clone git@github.com:MikeSaprykin/random-quote-machine.git

# change directory to our repo
cd random-quote-machine

# install the repo with npm or with yarn
npm install

# builds app with webpack and starts watching files
  npm start
  
# starts webpack-dev-server ( doesn't work in this build )
# npm run server

# builds app with webpack into docs folder
  npm run build

# navigate to docs folder
cd docs

# open index.html in your browser

# to run unit tests with karma/jasmine ( doesn't work in this build )
# npm test
```

Where to start:
------
 * You can watch compiled and working app [here](http://mikesaprykin.github.io/random-quote-machine/)
 * Watch my FreeCodeCamp [profile](https://www.freecodecamp.com/mikesaprykin)
 
TODOs:
-----
* [ ] Update Webpack-test.config
* [ ] Fix webpack-dev server support
* [ ] Update karma-shim.js
* [ ] Update karma.config.js
* [ ] Cover with unit tests
