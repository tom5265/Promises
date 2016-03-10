var promise = new Promise(function(fulfill, reject) {
    setTimeout(function() {
        var err = new Error('REJECTED!');
        reject(err);
    }, 300)
})

function onReject (e) {
    console.log(e.message);
}


promise.then(null, onReject);