//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348136331867";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU9oQWVxRDRZZGo4UHBTZFh5SGRxTDlCZU5kWTJLMUJhTnhyTE1NVzNYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidm5FOGxXUkRKa21XQmcvK2lGWW9SbXQxTEpMeHArSDkzMU5oOGRtZUt5UT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2Qzd1N1NCUzEwd3lXTjBwb1Y1U2JQQm5oOTZsZzJlRHJXdE1naWRiMEdzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmMEtPOEF2OG91bVNNMWtTQmRQSEhuQzM0V0VPd0VxbjI0TEhPV25sbVFFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNHYmJ5QlE1YTdmeWZVZlRFTy9RT1JWV1NtSERjMFZxbXYwbXF0Vzg2R3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtKa3cvTmxLaTRlZWVnTnJpTXpteVZ6VWN1ZUJ2Y2x0RFVlZ2hZRlgyV0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0QyRHQ1Q2ZYeEdPbk8vR0VSd0pkSzQ0NHhjdEFCRlRuZ2xZdFgwTUFsOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUo1c2tuaXVXV05QczJkeEV0NncxR0hNczljZk9ZMnVDRkx6UnZnZ1Z3ST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjE5Zk5LTzhnS1A0NDdDR2Q0LzB5MEt6dDNYKzVlSHFVYjlSa0pkZ0g2VXl4ZEQ5VE1KSnFTQ2J5WDhmZUFEVHFtSlhPTi9iMm5RbVdsWkd3QjZxd0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTExLCJhZHZTZWNyZXRLZXkiOiJab09FTGNNakhWZElvUGFDMVlFNXpWRU9Fdmd6OXF2OGhZczJCbEJwbFc0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJnMWI0RmRlVlRfU2I2blpFSTg5TzFBIiwicGhvbmVJZCI6IjRkYjE5ZGUwLTNiNjUtNDI4Ny1hZWVlLTlhOTdjMzJmZDE2MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxL2VHdTREb1F0Y2JhTm16NnBqVWhVN2tHSUE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYlBNNHVxV1VyKy82Q3AxaGJVUG53UUVFV2VFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNBRVE5NURLIiwibWUiOnsiaWQiOiIyMzQ4MTM2MzMxODY3OjNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01YOThmb0dFSnUreHJjR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjI2MWZjOTA3dEk2L2JTUy9pbDJIZHBwUVhsZVdZVnN5QzVXb3NwVDg3Qjg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjlQSFpIMWc4b0k3dmYvc1J1bU94TmlRYm9oNzBXSjBzUWVPYVhZRTFUYzdTdmZDbHJzRWV6eTExNXBkNVpkdStqRXVtSW5Hc0NhQkFSbmF6UlFCNUFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJUMlFjc294QTQyK2dsTzFKclFZOHhpYk1VcGNUbEk3ZnpSMWV0bnhMSVVKeFp3a3dCMEJ4N3o1RE5YdUpCbjJZVm5TOGdaT3BVRU9ValZNTktMdVhDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMzYzMzE4Njc6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkdXRYM1BkTzdTT3YyMGt2NHBkaDNhYVVGNVhsbUZiTWd1VnFMS1UvT3dmIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3MTEwOTUyfQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
