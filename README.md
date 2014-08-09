ngImgur
=======

![Travis](https://api.travis-ci.org/Wildhoney/ngImgur.png)
&nbsp;
![npm](https://badge.fury.io/js/ng-imgur.png)

* **Heroku**: [http://ng-imgur.herokuapp.com/](http://ng-imgur.herokuapp.com/)
* **Bower:** `bower install ng-imgur`

Getting Started
-------

With `ngImgur` you can easily add a component on your website to facilitate the uploading of [wonderful](http://imgur.com/r/cats/G3aeDmL) [cat](http://imgur.com/r/cats/WxJJdxC) [pictures](http://imgur.com/r/cats/afXv2f1) to [Imgur.com](http://imgur.com/r/cats) <sup>r/cats</sup>. **Meow!**

![Understand Me](https://lh3.googleusercontent.com/-Gw50oIx3PTg/UIvbuI6nWAI/AAAAAAAALcA/FgS55G2d7sU/w506-h391/How-The-Cats-Are-Hunting-Birds---The-Best-Tactics-And-Strategies--A-Natural-Cat-Behavior---Tom-An.jpeg)

Add the `ngImgur` module as a dependency to your application:

```javascript
$angular.module('myApp', ['ngImgur']);
```

And then import the service into any of your controllers, services, or directives:

```javascript
myApp.controller('CatController', function(imgur) {
    // ...
});
```

Then with your image (see [`FileReader`](http://www.w3.org/TR/FileAPI/)) invoke the `imgur.upload` method:

```javascript
imgur.upload(file).then(function then(model) {
    console.log('Your adorable cat be here: ' + model.link);
});
```

Using the `upload` method you can also upload an array of images &ndash; everything remains the same except the argument passed into `then` which would be a collection of the models.

```javascript
imgur.upload([firstFile, secondFile, thirdFile]).then(function then(collection) {
    console.log('You uploaded ' + collection.length + ' balls of fur!');
});
```

Tests
-------

All of the `ngImgur` tests can be run using [Karma](http://karma-runner.github.io/) with the easiest method being the `grunt test` command after you've installed all Bower dependencies with `bower install`.