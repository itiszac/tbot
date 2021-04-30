const twit = require("twit");
const second = 1000;

const T = new twit({
  consumer_key: process.env.TWITTER_API_KEY,
  consumer_secret: process.env.TWITTER_API_SECRET_KEY,
  access_token: process.env.TWITTER_API_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_API_ACCESS_TOKEN_SECRET,
  timeout_ms: process.env.MIN_TWIT_TIMEOUT * second,
});

module.exports = T;
