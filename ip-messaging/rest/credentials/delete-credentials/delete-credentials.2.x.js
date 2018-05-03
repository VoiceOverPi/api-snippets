const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const IpMessagingClient = require('twilio').IpMessagingClient;

const client = new IpMessagingClient(accountSid, authToken);

client
  .credentials('CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .delete()
  .then(response => {
    console.log(response);
  })
  .fail(error => {
    console.log(error);
  });
