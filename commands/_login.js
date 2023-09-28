/*CMD
  command: /login
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 🤦🏻‍♂️ Tu Rehne De Bhai Tere Bas Ki Baat Nahi Hai!

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var msg = "Abe Tu Jaa Na Tujhe Bola Na Tere Bas Ki Baat Nahi Hai"
if (message == "5477369813") {
  Bot.setProperty(
      "admin_chat",
       chat.chatid,
      "string"
  )

  msg = "✅ Yes, We recognise you!  Please Wait For The Messages From Users"
}

Bot.sendMessage(msg)
