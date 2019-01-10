var stan = require('node-nats-streaming').connect('test-cluster', 'test-2');
 
stan.on('connect', function () {
 
  // Simple Publisher (all publishes are async in the node version of the client)
  stan.publish('order.payment.rejected', 'Hasta la vista.', function(err, guid){
    if(err) {
      console.log('publish failed: ' + err);
    } else {
      console.log('published message with guid: ' + guid);
    }
  });

  //stan.close();
});

// stan.on('close', function() {
//   process.exit();
// });