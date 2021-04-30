const twit = require("twit");
const { SECOND } = require("./constants");

const T = new twit({
  consumer_key: process.env.TWITTER_API_KEY,
  consumer_secret: process.env.TWITTER_API_SECRET_KEY,
  access_token: process.env.TWITTER_API_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_API_ACCESS_TOKEN_SECRET,
  timeout_ms: Number(process.env.MIN_TWIT_TIMEOUT) * SECOND,
});

module.exports = T;
