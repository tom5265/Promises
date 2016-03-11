function parsePromised(pizza) {
    return new Promise(function(fulfill, reject) {
        try {
            fulfill(JSON.parse(pizza));
        } catch (e) {
            reject(e);
        }
    });
};

parsePromised(process.argv[2])
    .then(null, console.log)