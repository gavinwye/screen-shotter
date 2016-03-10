# cb-prototype
Child Benefit prototype

Prototyping tool built in [Express](http://expressjs.com/).

It will give you a basic Express app, with templates, css and images from the [GOV.UK front-end toolkit](https://github.com/alphagov/govuk_frontend_toolkit).


## Requirements

* [Node](http://nodejs.org/)

Install nodejs

* Minimum version `0.12.x`
** Node version needs to be v0.12.x **.

`sudo apt-get install nodejs`

If you're running a Linux distro you may need to install:

`sudo apt-get install nodejs-legacy`

You may already have it, try:

```
node --version
```

## Installing node modules

Run the following command to install the node modules
`sudo npm install`

## Getting started

* Clone this repo.

* If you don't have Node, download it here: [http://nodejs.org/](http://nodejs.org/).

* Run the app:

```
node start.js
```

* Go to [localhost:3000](http://localhost:3000) in your browser.

#### Prerequisite
[Heroku toolbelt](https://toolbelt.heroku.com/) needs to be installed to do deployments to heroku.

**NOTE:** If you require access to the heroku repository then contact [adamconder](https://github.tools.tax.service.gov.uk/adamconder)

1. Check out a new branch locally
  * `git checkout master`
  * `git pull`
  * `git checkout -b <branchname>`
2. Make changes to the prototype
  * Check the status `git status`
  * Add the changes `git add .` or `git add --all`
3. Commit the changes
  * `git commit -m "commit reason"`
4. Push the branch to remote github repository
  * `git push origin <branchname>`
5. Raise a pull request
  * [How to raise a pull request](https://help.github.com/articles/using-pull-requests/)
6. Merge the pull request into master
  * [Merging a pull request](https://help.github.com/articles/merging-a-pull-request/)
7. Update master branch
  * `git checkout master` && `git pull`

#### Deploying

**NOTE:** You need to be logged into heroku through the toolbelt
```heroku login```

**NOTE:** You may encounter an issue regarding permissions to push to the repository (public key), [you need to upload your ssh key to heroku](https://devcenter.heroku.com/articles/keys#adding-keys-to-heroku).

1. Push to heroku
  * `git push heroku master`