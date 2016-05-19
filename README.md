# THE PAW COLLECTIVE

## Overview

I built/designed this mainly because my younger sister wanted a site that showcased all the famous dogs around the world. 
The site would need a back-office where she would be able to make CRUD operations of famous dogs, and also the ability to
add interviews that she would make with the dog owners. 

The idea was to build it entirely from scratch, starting with some designs that I would mock-up myself with Bohemian Sketch, 
code out the front-end components, and then to work on the backend API and the backoffice interface as well. 

## Technologies Used

* Angular
* Mongo
* Express
* Node
* SASS 
* Grunt
* Cloudinary
* DigitalOcean
* PhantomJS

## Running locally

1. Clone this repository
2. Add Cloudinary API/Secret key to your ENV
4. Run the following commands in the app's root directory then open http://localhost:3001

```
npm   install
bower install
mongod
grunt serve
```

## Building the production version

Since I am using DigitalOcean, I use the buildcontrol provided by Grunt to deploy via SSH, however you are more 
welcome to use heroku.  Just be sure to add the right ENV variables for it to work. 

```
grunt serve:dist (preview)
grunt build
grunt buildcontrol:digitalocean
```