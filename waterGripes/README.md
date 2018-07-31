# WaterGripes
Water Gripes - Report Your Water Gripes 

## Description

 Water Gripes provides an easy way to report water leaks and other problems to the New Orleans Sewerage and Water Board. Users to login and authenticate using a google account, report water problems as well as view and vote on the resolved/unresolved status of reported water leaks. Upon submission of water gripes an automated email is sent to the New Orleans Sewrage and Water board The application also retrieves the coordinates of submitted gripes via Google geo-locating for use in future versions which will implement Google maps.


## Team
-__Product Owner__: Josef Butts
-__Scrum Master__: Mark Stark
-__Development Team Members__: Josef Butts, Mark Stark

##Table of Contents
1
## Install
 1.[Usage](#usage)
 1.[Development](#development)
    1.[Installing Dependencies](#installing-dependencies)
    1.[NPM Scripts](#NPM Scripts)

##Usage
>This project uses: 
  -Angular6
  -Express v4
  -Node 8
  -Mysql V5.7.22
  -Angular-6-social-login
  -SendGridEmail

##Installing Dependencies
From within the project root directory
 ```sh
  npm install
  ```

## Development server
```sh
nodemon server/index.js
ng build
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build

