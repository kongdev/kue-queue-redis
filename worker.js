var Redis = require('ioredis');
var kue = require('kue');


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

queue.process('email', 5000, function(job, done) {
    done();
})




