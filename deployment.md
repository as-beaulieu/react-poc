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