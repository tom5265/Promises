
first().then(function(success) {
        return second(success);
    }).then(function(success) {
        console.log(success);
    });



// OFFICIAL SOLUTION

// var firstPromise = first();

// var secondPromise = firstPromise.then(function(val) {
//     return second(val);
// });

// secondPromise.then(console.log);
