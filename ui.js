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

kue.app.listen(9898); 