var Promise = require('bluebird');
 
function car(){
	var isStarted = false;
 
  this.start = function(){
		var deferred = Promise.pending();
		if(isStarted){
	        deferred.reject('Error:Already Started!');
	    }
	    else{
	    	isStarted = true;
	    	console.log('Started Engine');
	    	deferred.resolve('Started Engine');
	    }
	    return deferred.promise;
	}
 
	this.stop = function(){
		var deferred = Promise.pending();
		if(!isStarted){
	        deferred.reject('Error:Not Start yet!');
	    }
	    else{
	    	isStarted = false;
	    	console.log('Stopped Engine');
	    	deferred.resolve('Stopped Engine');
	    }
	    return deferred.promise;
	}
 
	this.forward=function(a){
    console.log('forward',a);
		var deferred = Promise.pending();
 
		if(!isStarted){
	        deferred.reject('Error:Not Start yet!');
	    }
	    else{
	    	isStarted = true;
	    	console.log('Go forward');
	    	deferred.resolve('Go forward');
	    }
	    return deferred.promise;
	}
 
	this.backward =function(){
		var deferred = Promise.pending();
		if(!isStarted){
	        deferred.reject('Error:Not Start yet!');
	    }
	    else{
	    	isStarted = true;
	    	console.log('Go backward');
	    	deferred.resolve('Go backward');
	    }
	    return deferred.promise;
	}
 
	this.turnleft=function(){
		console.log("test1 = ",arguments);
		var deferred = Promise.pending();
		console.log("test2 = ",arguments);
		if(!isStarted){
	        deferred.reject('Error:Not Start yet!');
	    }
	    else{
	    	isStarted = true;
	    	console.log('Turn left');
	    	deferred.resolve('Turn left');
	    }
	    return deferred.promise;
	}
 
	this.turnright=function(){
		var deferred = Promise.pending();
		if(!isStarted){
	        deferred.reject('Error:Not Start yet!');
	    }
	    else{
	    	isStarted = true;
	    	console.log('Turn right');
	    	deferred.resolve('Turn right');
	    }
	    return deferred.promise;
	}
 
}
 
var mycar = new car();
mycar.start()
.then(mycar.turnleft)
.then(mycar.turnright)
.then(mycar.backward)
.then(mycar.start).catch(function(e){
  console.log(e);
});

var car2 = function(){
	var isStarted = false;
  this.start = function(){
    return new Promise((resolve, reject) => {
      if(isStarted){
        reject('Error:Already Started!');
      }
      else{
        isStarted = true;
        console.log('Started Engine');
        resolve('Started Engine');
      }
    });
  }
  this.stop = function(){
  	return new Promise((resolve, reject) => {
      if(!isStarted){
        reject('Error:Not Start yet!');
      }
      else{
        isStarted = false;
        console.log('Stopped Engine');
        resolve('Stopped Engine');
      }
    });
  }
  this.forward = function(a){
    return new Promise((resolve, reject) => {
      console.log('forward',a);
      if(!isStarted){
        reject('Error:Not Start yet!');
      }
      else{
        isStarted = true;
        console.log('Go forward');
        resolve('Go forward');
      }
    });
  }
  this.backward =function(){
    var deferred = Promise.pending();
    return new Promise((resolve, reject) => {
      if(!isStarted){
        reject('Error:Not Start yet!');
      }
      else{
        isStarted = true;
        console.log('Go backward');
        resolve('Go backward');
      }
    });
  }
  this.turnleft=function(){
    return new Promise((resolve, reject) => {
      console.log("test1 = ",arguments);
      console.log("test2 = ",arguments);
      if(!isStarted){
        reject('Error:Not Start yet!');
      }
      else{
        isStarted = true;
        console.log('Turn left');
        resolve('Turn left');
      }
    });
	}
 
	this.turnright=function(){
    return new Promise((resolve, reject) => {
      if(!isStarted){
        reject('Error:Not Start yet!');
      }
      else{
        isStarted = true;
        console.log('Turn right');
        resolve('Turn right');
      }
    });
	}
}

var carnew = new car2();
carnew.start()
.then(carnew.turnleft)
.then(carnew.turnright)
.then(carnew.backward)
.then(carnew.start)
.catch(function(e){
  console.log(e);
});
