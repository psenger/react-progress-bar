# Sagas

Sagas help mitigate function side effects, allowing the store and actions to remain _pure_ with the usage of ES6 Generators. 

> In computer programming, a function may be considered a pure function if both of the following statements about the function hold:
> 
> The function always evaluates the same result value given the same argument value(s). The function result value cannot depend on any hidden information or state that may change while program execution proceeds or between different executions of the program, nor can it depend on any external input from I/O devices (usually—see below).
> Evaluation of the result does not cause any semantically observable side effect or output, such as mutation of mutable objects or output to I/O devices (usually—see below).

[https://en.wikipedia.org/wiki/Pure_function](https://en.wikipedia.org/wiki/Pure_function)

Because data is fetched from an external source, this is a side effect. In the following example of a side effect, date is an external influence, and changes the result every time this function is called. 
 
````js

 function getYear() {
  var d = new Date();
  return d.getFullYear();
 }

````

Generators introduce some new syntax and behavior for functions. Once a generator is called, it can yield a value and control over to the caller with a return object that has two values ``value`` and ``done``. When done is true, the function has completed.

 ````js
 
var generator = function* (a) { 
    for( ; ; ) {
      a = a + 3;
      yield a;
    }
};
var sum = generator(5);
console.log(sum.next()); // returns { value : 8, done : false }
console.log(sum.next()); // returns { value : 11, done: false }

 ````
While [Redux Saga](https://github.com/redux-saga/redux-saga) provides an api around Generators and Redux it is not the only framework, there are many. It is one of the more widely accepted frameworks and that is why I chose it to wrap the side effects of the redux store.

## Directory structure

This directory is broken down into two types of Saga's. They are the saga's responsible for Working and Watching. Watchers, watch for Redux Events and initiate the workers. They also control the behavior of the watcher, for example, they Debounce or Throttle the calls to the workers. Watchers are loaded into the store by being exported by the combiner in the index file.

## TODO 

I would add message calls of the api status in the fetchButtonBarsWorker. I have added the code there, and commented it out.

## Testing

Testing was adopted from [https://redux-saga.js.org/docs/advanced/Testing.html](https://redux-saga.js.org/docs/advanced/Testing.html)

