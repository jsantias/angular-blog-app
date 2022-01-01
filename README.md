# Gwats
A simple web application that when loaded retrieves all previous user submissions from the server via a HTTP GET request and displays them in a vertical list, similar to a blog however anyone can make a new post. The list of user posts is ordered with the newest posts first. If a post has a Subject URL included then an iframe using the Subject URL as the source is displayed between directly below the post's title, this is to let users show the website they're talking about in their post.

At the top of the page there is a 'Submit new post' button which should open a modal form. This form has 4 fields:

* Title        : (required) this is the title of the new post.
* Body         : (required) this is the actual content of the post, it can be very long sometimes but should never be longer than 1000 characters.
* Category     : (required) a drop down with the following options: 'Lifestyle', 'Travel', 'Video'
* Subject URL  : (optional) this can be the URL of any webpage. eg: https://www.google.com

When the user submits the form it is sent to the server using a POST request (eg: using the Angular $http service). The server will save the fields in the database.

When a post is displayed in the list it should take a form similar to:

```
#!html
 <!--for each post-->
  <div>
      <heading>post's title here</heading>
      <iframe source='post subject url'></iframe>
      <text>post's body of text here</text>
  </div>
```


If the post does not have a Subject URL then the iframe should not be shown for this post. Hint: *ng-if*


## Prerequisites

```
NodeJS
Web Browser
NPM package manager
```


## Deployment 

Development environment:

```
1. cd to the root folder of this project
2. npm install
3. npm run client-install
4. npm run server-install
5. npm run dev
```

Production environment:

```
1. cd to the root folder of this project 
2. npm install
3. npm run client-install
4. npm run server-install
5. npm run client-build
6, Creates a build folder in client/dist
```

Client side uses the Angular framework and is proxied to the node server for running CRUD operations. 

Client runs on port 4200, Server runs on port 4201

## Environment Variables 
A file '.env' needs to be created inside of the server folder in order to connect to the db

## Authors

- **John Santias** - Full Stack Developer - [AsianJohnBoi](https://github.com/AsianJohnBoi)
