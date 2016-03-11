 var promise = new Promise(function (fulfill, reject) {
      fulfill('SECRET VALUE');
      var err = new Error('I DID NOT FIRE');
        reject(err);
    });


promise.catch(function (err) {
    console.error(err.message);
})

var prommy = Promise.resolve('SECRET VALUE');

var promm = Promise.reject(new Error('SECRET VALUE'));