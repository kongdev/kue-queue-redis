
//const RedisClustr = require('redis-clustr'); 

//const redis = new Config; 
//const client = new RedisClustr(redis.getConfig())

const Redis = require('ioredis');
const kue = require('kue');
const Config = require('./config'); 

const queue = kue.createQueue( {
  prefix:'q', 
  redis: {
      createClientFactory:function () {
        return new Redis.Cluster([ {
          host:'192.168.2.84', 
          port:7001
        },  
        {
         host:'192.168.2.84', 
          port:7002
        },  
        {
         host:'192.168.2.84', 
          port:7003
        },  
        {
         host:'192.168.2.84', 
          port:7004
        },  
        {
         host:'192.168.2.84', 
          port:7005
        },  
        {
         host:'192.168.2.84', 
          port:7006
        }
        ]); 
      }
    }
}); 

/*
- active
- inactive
- failed
- complete
*/


var interval = setInterval(function(){ 
  kue.Job.rangeByState( 'complete', 0, 5000, 'asc', function( err, jobs ) {
    jobs.forEach( function( job ) {
      job.remove( function(){
        //console.log( 'removed ', job.id );
      });
    });
  });
}, 3000);