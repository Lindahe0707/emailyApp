# emailyApp

This is a course project designed by Stephen Grider on Udemy. The application is used for users to send mass emails to a big list of target customers for the purpose of collecting feedback.

# Build With

* React
* Node JS
* Google OAuth
* Stripe API
* SendGrid API

# Prerequisites

1. npm and node JS

2. This application was deployed on the cloud platform Raiway. Production keys are stored in the deploy cloud platform. But the deployment is no longer available as Railway removed its free tier service since August 1, 2023. 

3. In order to run the application in the dev mode, you should create a dev.js under config file. Set the keys as below:

```
module.exports = {
  googleClientID:,
  googleClientSecret: ,
  mongoURI:,
  cookieKey: ,
  stripePublishableKey:,
  stripeSecretKey:,
  sendGridKey:,
  redirectDomain: "http://localhost:3000",
}

# Installation

1. clone the repo
   
   `git clone https://github.com/Lindahe0707/emailyApp.git`
   
3. Install npm packages
    
   `npm install`

4. Run the project

  `npm run start`

# Acknowledgements

https://www.udemy.com/course/node-with-react-fullstack-web-development/

