let data = require("../hashtags.json");

Math.random = (function xoshiro128p() {
  // Using the same value for each seed is _screamingly_ wrong
  // but this is 'good enough' for a toy function.
  let a = Date.now(),
    b = Date.now(),
    c = Date.now(),
    d = Date.now();
  return function () {
    let t = b << 9,
      r = a + d;
    c = c ^ a;
    d = d ^ b;
    b = b ^ c;
    a = a ^ d;
    c = c ^ t;
    d = (d << 11) | (d >>> 21);
    return (r >>> 0) / 4294967296;
  };
})();

var obj = {
  timeout: (ms) => {
    return new Promise((res) => {
      setTimeout(() => {
        res("");
      }, ms);
    });
  },
  getRandomNum: (min, max) => {
    let num;
    for (let i = 0; i < 25; i++)
      num = Math.floor(Math.random() * (max - min + 1) + min);
    return num;
  },
  getHashtag: () => {
    if (data.length > 0) {
      let num = obj.getRandomNum(0, data.length - 1);
      if (data[num].hashtags.length > 0) {
        let hashtag_index = obj.getRandomNum(0, data[num].hashtags.length - 1);
        return data[num].hashtags[hashtag_index];
      }
      return obj.getHashtag();
    }
    return "No hashtags";
  },
};

module.exports = obj;
