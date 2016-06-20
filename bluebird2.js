var Promise = require('bluebird');
 
var car = function(){
	var isStarted = false;
 
  var start = function(){
		var deferred = Promise.pending();
		if(isStarted){
	        deferred.reject('Error:Already Started!');
	    }
	    else{
	    	isStarted = true;
	    	console.log('Started Engine r u ok?');
	    	deferred.resolve('Started Engine');
	    }
	    return deferred.promise;
	}
 
	var stop = function(){
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
 
	var forward=function(a){
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
 
	var backward =function(){
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
 
	var turnleft=function(){
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
 
	var turnright=function(){
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

	start()
	.then(turnleft)
	.then(backward)
	.then(start)
	.then(turnright)
	.catch(function(e){
	  console.log(e);
	});
 
}
 
var mycar = car();