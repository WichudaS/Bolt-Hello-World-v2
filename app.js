//config dotenv
require("dotenv").config()

//require bolt and put into 'app'

const { App } = require("@slack/bolt");

//Initialize with bot token and signing secret
const app = new App({
  token: process.env.BOT_TOKEN,
  signingSecret: process.env.SIGNING_SECRET
});


//[WORKS!] listening to 'Hello' on anywhere in scope
app.message(/^(hi|hello|hey|Hi|Hello|HI|สวัสดี).*/, async function({context, say}) {
  console.log(context);
  console.log('Request ended');
  //say 'Hello USER!'
  const greeting = context.matches[0];
  await say('Did you just say ' + greeting + "?");
  console.log('Said HELLO back!');
});


//[WORKS!] slash command "/bolt" => send MOM input modal
app.command('/bolt', async ({ command, ack, say }) => {
  // Acknowledge command request
  await ack();
  console.log("MOM REQUEST COMMAND START");
  console.log(command);
  console.log("MOM REQUEST COMMAND ENDED");
  await say("Command received!");
  console.log("/MOM RESPONDED 👌");
});




(async() => {
  //start the App
  app.start(process.env.PORT || 3000)
    console.log("⚡️ Bolt-Hello-World-V2 app is running! and This is a 3rd revision");
})();
