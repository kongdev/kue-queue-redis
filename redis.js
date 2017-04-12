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


var interval = setInterval(function(){

    for (i = 1; i <= 10000; i ++ ) {
      
    var job = queue.create('email',  {
            title:'welcome email '+i, 
            to: i+' @learnboost.com', 
            template:'welcome-email '+i
    }).attempts(10).save()

    }
}, 1000);








