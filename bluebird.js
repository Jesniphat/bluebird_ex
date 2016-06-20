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