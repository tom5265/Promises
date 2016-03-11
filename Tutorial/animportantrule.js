function alwaysThrows () {
    throw Error('OH NOES');
}

function iterate (awl) {
    console.log(awl);
    return ++awl;
}

Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null, console.log);