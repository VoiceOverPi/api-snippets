// Download the twilio-csharp library from twilio.com/docs/csharp/install
using System;
using Twilio;
class Example 
{
  static void Main(string[] args) 
  {
    // Find your Account Sid and Auth Token at twilio.com/user/account
    string AccountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    string AuthToken = "{{ auth_token }}";
    var twilio = new TwilioRestClient(AccountSid, AuthToken);

    var members = twilio.ListQueueMembers("QU5ef8732a3c49700934481addd5ce1659");
    
    foreach (var member in members.QueueMembers)
    {
      Console.WriteLine(member.WaitTime);
    }
  }
}