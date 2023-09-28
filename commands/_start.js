/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Bot.sendKeyboard(
  "📌Joined","*💡You Must Join Our Channels to Start Bot\n\n🕊 Join *[Promoter Channel](https://t.me/+N5PhrATv90M1M2Nk)\n\n*🍀Done Subscribed! Click on Joined*",{ disable_web_page_preview: "true" }
)
function hello(message) {
  var greetings = ""

  Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
  Bot.sendMessage("*💣You're Trying To Invite You're Self *")
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
  hello("")
  var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
 balance.add(0.0)
Bot.sendMessageToChatWithId(refUser.chatId, "*🚀 New Referral Reward only if user joins our channels!*");
}

function doAlreadyAttracted(){
  Bot.sendMessage("*💣You Already Started The Bot *");
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);

var status = Libs.ResourcesLib.anotherChatRes("user", "global")
  status.add(1)
