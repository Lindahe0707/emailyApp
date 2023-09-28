const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require("./models/User");
require("./models/Survey");
require("./models/Draft");
require("./services/passport"); // make sure the schemas are defined before used

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // make the cookie last for 30 days
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize()); 
app.use(passport.session());

require("./routes/authRoutes")(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);
require('./routes/draftRoutes')(app);

//configuration only for the production mode
if (process.env.NODE_ENV === 'production'){
    //Express serve up production assets like main.js and main.css file.
    app.use(express.static('client/build'));
    //Express serve up the index.html file if it doesn't recognize the route.
    const path = require('path');
    app.get('*', (req, res)=> {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5001;
app.listen(PORT);
