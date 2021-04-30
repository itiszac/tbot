require("dotenv").config();
const { actions } = require("./bot/actions");
const { getRandomNum, timeout } = require("./bot/utils");
const { SECOND, ACTION_COUNT } = require("./bot/constants");

async function main() {
  try {
    while (true) {
      await actions(getRandomNum(0, ACTION_COUNT - 1));
      let timeout_len = getRandomNum(
        Number(process.env.MIN_TWIT_TIMEOUT),
        Number(process.env.MAX_TWIT_TIMEOUT)
      );
      console.log("Timing out for", String(timeout_len), "seconds..");
      await timeout(timeout_len * SECOND);
    }
  } catch (e) {
    console.error(e);
  }
}

console.log("Starting tbot.. a dumbass Twitter bot...");

main();
