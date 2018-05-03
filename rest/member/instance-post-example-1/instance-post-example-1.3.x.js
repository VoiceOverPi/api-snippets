// Download the Node helper library from twilio.com/docs/node/install
// These identifiers are your accountSid and authToken from
// https://www.twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client
  .queues('QU5ef8732a3c49700934481addd5ce1659')
  .members('Front')
  .update({
    url: 'http://demo.twilio.com/docs/voice.xml',
    method: 'POST',
  })
  .then(member => console.log(member.waitTime));
