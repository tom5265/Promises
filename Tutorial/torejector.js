var promise = new Promise(function(fulfill, reject) {
        fulfill('I FIRED');
        var err = new Error('I DID NOT FIRE');
        reject(err);
})

function onRejected (e) {
    console.log(e.message);
}

promise.then(console.log, onRejected);