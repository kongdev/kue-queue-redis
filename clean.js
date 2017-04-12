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