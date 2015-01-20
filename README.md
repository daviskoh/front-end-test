# Front End Test
===================================

Front end test for Amplify

###Installation

1.) Clone the repo:

```
$ git clone git@github.com:daviskoh/front-end-test.git
```

2.) Install global dependencies:

```
$ npm install -g bower
$ npm install -g grunt
```

3.) `cd` into the repo, then:

```
$ npm install
$ npm start || grunt serve
```

open **http://localhost:3000**

### Code Documentation

[ngdocs](https://github.com/idanush/ngdocs) is used

To compile ngDocs & start server, run:

```
$ grunt docs
```

and open **http://localhost:4000**

### Unit Tests

Tests are written with Karma + Jasmine. The configs are located in the file `karma.conf.js`.

```
$ npm test || grunt test
```

Test specs sit alongside associated component files in the /src/app folder. Spec filenames should mirror the file they are testing, but with the extension `.spec.js`.

Ex:

```
app/feature/feature-controller.js
app/feature/feature-controller.spec.js
app/feature/stuff-service.js
app/feature/stuff-service.spec.js
```

