#Deployment

## Heroku

### Sign up for Heroku

### Setup react app

Need npm and node versions

`npm -v`

`node -v`

insert as "engines" in package.json

```json
{
  "engines": {
    "npm": "6.14.4",
    "node": "13.12.0"
  },
  "dependencies": {
    //dependencies here
  }
}
```

### Procfile

The Procfile is always a simple text file that is named Procfile without a file extension. 
For example, Procfile.txt is not valid.

Needs to reference the server.js, which will give instructions
for the program to run in the Heroku environment

`web: node server.js`

### server.js

provides instruction for service to run in heroku environment

Uses express

Sets starting path, and port to listen to

If in production environment (heroku), sets target directory to the build folder

`app.use('*', express.static('build')); // Added this`

This is for react-router, specifying that all routes are to be found in the build folder

### Create Heroku Git Repository

`heroku --version`

`heroku login`

`git init`

`git add .`

`git commit -m "initial commit"`

`heroku create`

Two links will come up in response, copy second link

`git remote add heroku (Copied Link)`

`git push heroku master`

`heroku open`

Anytime changes are made:

`git add .`

`git commit -m "commit message"`

`git push heroku master`