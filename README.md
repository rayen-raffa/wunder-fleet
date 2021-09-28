# WunderFleet

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

## Possible code optimizations
- Fetch form questions from an external source (e.g. back-end server) for more flexibility
- Save user-provided information from each input separarely. That way, if a user leaves mid-step, he would find the answers to the questions he answered in a given step w/o necessarily having finished that particular step.

## What could I have done better ?
- Task prioritization : It would have been more efficient if I worked on creating the application state managment system combined with hard-coded forms first. Once I have the store up-and-running, I could, then, have refactored the multistep form into a dynamically generated one.

## Live Server

Please visit this [link](https://wunder-fleet-dde9c.firebaseapp.com/).

## Continuous Integration

There are two pipelines configured to work on this project :
### [CI](https://github.com/rayen-raffa/wunder-fleet/blob/main/.github/workflows/main.yml)
This pipeline triggers when a **PR** to **main** branch is created. It has two jobs :
- *unit-tests* : executes unit test on project code
- *build* : builds the application
### [Deployment](https://github.com/rayen-raffa/wunder-fleet/blob/main/.github/workflows/deploy.yml)
This pipeline triggers when new code is **merged** to **main** branch. It, too, has two jobs :
- *unit-tests* : executes unit test on project code
- *build-and-deploy* : builds the application and deploys it to **[Firebase]**(https://wunder-fleet-dde9c.firebaseapp.com/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/wunder-fleet` directory.

## Running unit tests

Run `npm run test` to execute the unit tests via [Jest](https://jestjs.io/).
