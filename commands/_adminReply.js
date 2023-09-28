/*CMD
  command: /adminReply
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please input reply for user

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var tgid = options.tgid;

var msg = "Answer from Syed: " + "\n" + message + "\n\n Reply again: /message";
Bot.sendMessageToChatWithId(tgid, msg);

Bot.sendMessage("Message was sended")
