// function timeout(ms) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(resolve, ms, 'done');
// 	});
// }

// timeout(100).then((value) => {
// 	console.log(value);
// 	return new Promise((resolve, reject) => {
// 		reject();
// 	})
// }).then(() => {
// 	console.log('resolve')
// }, () => {
// 	console.log('reject')
// });

// var p1 = new Promise(function(resolve, reject) {
// 	setTimeout(() => reject(new Error('fail')), 3000)
// })

// var p2 = new Promise(function(resolve, reject) {
// 	setTimeout(() => resolve(p1), 1000)
// })

// p2
// 	.then(result => console.log(result))
// 	.catch(error => console.log(error))

var someAsyncThing = function() {
	return new Promise(function(resolve, reject) {
		resolve(x + 2);
	});
};

someAsyncThing().then(function() {
	console.log('everything is great');
});