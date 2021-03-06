# cb-prototype
Child Benefit prototype

https://github.tools.tax.service.gov.uk/DDCN/cb-prototype

http://cb-prototype.herokuapp.com/

username: `ddcn`
password: `b3n3fit`

Prototyping tool built in [Express](http://expressjs.com/).

It will give you a basic Express app, with templates, css and images from the [GOV.UK front-end toolkit](https://github.com/alphagov/govuk_frontend_toolkit).


## Requirements

* [Node](http://nodejs.org/)
* [Heroku toolbelt](https://toolbelt.heroku.com/) needs to be installed to do deployments to heroku.

# Node

* Minimum version `0.12.x`

`sudo apt-get install nodejs`

If you're running a Linux distro you may need to install:

`sudo apt-get install nodejs-legacy`

You may already have it, try:

`node --version`

## Installing node modules

Run the following command to install the node modules
`npm install`

## Getting started

* Clone this repo.
* Run the app:

```
node start.js
```

* Go to [localhost:3000](http://localhost:3000) in your browser.

#### Deploying

**NOTE:** If you require access to the heroku repository then contact [adamconder](https://github.tools.tax.service.gov.uk/adamconder)

**NOTE:** You need to be logged into heroku through the toolbelt
```heroku login```

**NOTE:** You may encounter an issue regarding permissions to push to the repository (public key), [you need to upload your ssh key to heroku](https://devcenter.heroku.com/articles/keys#adding-keys-to-heroku).

#### Remotes
This prototype is deployed to the following remotes:

heroku	https://git.heroku.com/child-benefit-prototype.git (push)
heroku	https://git.heroku.com/child-benefit-prototype.git (fetch)
hmrc	git@github.tools.tax.service.gov.uk:DDCN/cb-prototype.git (fetch)
hmrc	git@github.tools.tax.service.gov.uk:DDCN/cb-prototype.git (push)
origin	git@github.com:gavinwye/child-benefit-prototype.git (fetch)
origin	git@github.com:gavinwye/child-benefit-prototype.git (push)
user-research	git@heroku.com:cb-user-research.git (push)
user-research	git@heroku.com:cb-user-research.git (fetch)
what-if	git@heroku.com:cb-what-if.git (fetch)
what-if	git@heroku.com:cb-what-if.git (push)

Remotes can be added to git using the command ```git remote add [name] [url]``` see the git docs for more information.
