const axios = require("axios");
const { MessageAttachment } = require("discord.js");

function getPic(url) {
  // pass in url
  return axios.get(url, {
    // returning an async function
    responseType: "arraybuffer", // return as an array buffer
  });
}
// https://suzy-jennie-api.herokuapp.com/

/**
 * axios-like response:
 *
 * response = {
 *  "statusCode": 200,
 *  "data": uhjwehrkhwurhw4r
 * }
 *
 */

module.exports = {
  name: "get",
  execute(message, args) {
    if (args[0] == "suzy") {
      getPic("https://suzy-jennie-api.herokuapp.com/suzy").then(function (
        response
      ) {
        const image = Buffer.from(response.data, "base64"); //returns response and data and changes to base 64
        const attachment = new MessageAttachment(image, "suzy.jpg");
        message.channel.send(attachment);
      });
    } // get the first item in the list, then run asynchronous funciton
    if (args[0] == "jennie") {
      getPic("https://suzy-jennie-api.herokuapp.com/jennie").then(function (
        response
      ) {
        const image = Buffer.from(response.data, "base64"); //returns response and data and changes to base 64
        const attachment = new MessageAttachment(image, "jennie.jpg");
        message.channel.send(attachment);
      });
    } // get the first item in the list, then run asynchronous funciton
  },
};
