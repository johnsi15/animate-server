const webrtc2Images = require ('webrtc2images');
const xhr = require ('xhr');

const rtc = new webrtc2Images({
	width: 200,
	height: 200,
	frames: 10,
	type: 'image/jpeg',
	quality: 0.4,
	interval: 200
});

rtc.startVideo(function(err){

});

const record = document.querySelector('#record');

record.addEventListener('click', function(e){
	e.preventDefault();

	rtc.recordVideo(function(err, frames){
		xhr({
		uri: '/process',
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({ images: frames}),
		}, function(err, res, body){
			if(err) return logError(err);

			console.log(JSON.parse(body));
		});
		
	});

}, false);