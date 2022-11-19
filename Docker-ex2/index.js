const express = require('express')
const redis = require('redis')
const process = require('process') // this is to crash the app when calling the get endpoint

const app = express();
const client = redis.createClient({
    host : 'redis-server',
    port : 6379
});
client.set('visits',0);

app.get('/', (req,res) => {
    process.exit(0); // this line will crash the server
    client.get('visits', (err,visits) => {
        res.send('Number of visits :'+visits);
        client.set('visits', parseInt(visits)+1);
    });
})

app.listen(8081, ()=> {
    console.log('listning to 8081');
})