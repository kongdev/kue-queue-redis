const kue = require('kue'); 
const Redis = require('ioredis'); 
const Config = require('./config'); 

const queue = kue.createQueue( {
  prefix:'q', 
  redis: {
      createClientFactory:function () {
        return new Redis.Cluster(Config); 
      }
    }
});  

queue.process('email', 5000, function(job, done) {
    done();
})




