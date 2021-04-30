require("dotenv").config();
const { actions } = require("./bot/actions");
const { getRandomNum, timeout } = require("./bot/utils");

async function main() {
  try {
    while (true) {
      await actions(getRandomNum(0, 2));
      let timeout_len = getRandomNum(
        Number(process.env.MIN_TWIT_TIMEOUT),
        Number(process.env.MAX_TWIT_TIMEOUT)
      );
      console.log("Timing out for", String(timeout_len), "seconds..");
      await timeout(Number(timeout_len) * 1000);
    }
  } catch (e) {
    console.error(e);
  }
}

console.log("Starting tbot.. a dumbass Twitter bot...");

main();
