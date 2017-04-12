const Redis = require('ioredis');
const kue = require('kue');
const Config = require('./config'); 

const queue = kue.createQueue( {
  prefix:'q', 
  redis: {
      createClientFactory:function () {
        return new Redis.Cluster(Config); 
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
}, 3000);








