# WunderFleet

A multi-step registration form using Angular and NgRx for State Management. It offers data persistence on LocalStorage to enable the user to pick-up where he left off during the registration process.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

## Screenshots
### Personal information view
![Submit personal information](./screenshots/view_personal_information.png?raw=true "Submit personal information")



### Address view
![Submit address](./screenshots/view_address.png?raw=true "Submit address")



### Payment Information view
![Submit payment information](./screenshots/view_payment_information.png?raw=true "Submit payment information")



### Registration success view
![Registration succes](./screenshots/view_registration_success.png?raw=true "Registration succes")



### End-to-end registration scenario (GIF)
![E2E Registration Scenario](./screenshots/e2e_registration_scenario.gif?raw=true)


## Possible code optimizations
- Fetch form questions from an external source (e.g. back-end server) for more flexibility
- Save user-provided information from each input separarely. That way, if a user leaves mid-step, he would find the answers to the questions he answered in a given step w/o necessarily having finished that particular step.
- Better error handling
- UI enhancement :
    1. Add progress bar help user track his progress through registration steps
    2. Add loading screen during request to demo endpoint for a smoother experience 


## What could I have done better ?
- Task prioritization : It would have been more efficient if I worked on creating the application state managment system combined with hard-coded forms first. Once I have the store up-and-running, I could, then, have refactored the multistep form into a dynamically generated one.
- Time Estimation: Building on previous point, I would have been able to make better progress in the app if I better estimated the time I needed for different tasks.


## Live Server

Please visit this [link](https://wunder-fleet.herokuapp.com/) for a live preview of the app.

## Resolving CORS policy 
To enable the application to request payment information from remote demo endpoint, two solutions were employed:
1. In **development** mode, a simple proxy was used. Proxy config available [here](https://github.com/rayen-raffa/wunder-fleet/blob/main/src/proxy.conf.json).
2. In **production** mode, the application is wrapped in a Express/NodeJS server that forwards the request from the front-end to the payment endpoint and then sends back the endpoint's response back to the client. The wrapped application (Angular + Express) is deployed to Heroku were the front-end build is served statically.

## Continuous Integration

There are two pipelines configured to work on this project :
### [CI](https://github.com/rayen-raffa/wunder-fleet/blob/main/.github/workflows/main.yml)
This pipeline triggers when a **PR** to **main** branch is created. It has two jobs :
- *unit-tests* : executes unit test on project code
- *build* : builds the application
### [Deployment](https://github.com/rayen-raffa/wunder-fleet/blob/main/.github/workflows/deploy.yml)
This pipeline triggers when new code is **merged** to **main** branch. It, too, has two jobs :
- *unit-tests* : executes unit test on project code
- *build-and-deploy* : builds the application and deploys it to **[Heroku](https://wunder-fleet.herokuapp.com/)**

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/wunder-fleet` directory.

## Running unit tests

Run `npm run test` to execute the unit tests via [Jest](https://jestjs.io/).
