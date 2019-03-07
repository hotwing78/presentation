const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
	host: 'redis-server',
	port: 6379
});
//Initialize number of visits to 0;
client.set('visits', 0); 
//Home route
//Call back function
app.get('/', (req,res) =>{
	client.get('visits',(err,visits)=>{
		res.send('Number of visits is ' + visits);
		//Use parseInt function to make sure we get back a num when adding 1;
		client.set('visits', parseInt(visits) + 1);
	});

});

app.listen(8081, () => {
	console.log('Listening on port 8081'); 
});
