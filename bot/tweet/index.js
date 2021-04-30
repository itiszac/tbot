const twit = require("../twit");

module.exports = {
  getTimeline: (count) => {
    return new Promise((res, rej) => {
      let params = {
        count,
      };
      twit.get("statuses/home_timeline", params, (err, data) => {
        if (err) {
          return rej(err);
        }
        return res(data);
      });
    });
  },
  getTweets: (q, count) => {
    return new Promise((res, rej) => {
      let params = {
        q,
        lang: "en",
        result_type: "recent",
        count,
      };

      twit.get("search/tweets", params, (err, data) => {
        if (err) {
          return rej(err);
        }
        return res(data);
      });
    });
  },
  postTweet: (status) => {
    return new Promise((res, rej) => {
      let params = {
        status,
      };
      twit.post("statuses/update", params, (err, data) => {
        if (err) {
          return rej(err);
        }
        return res(data);
      });
    });
  },
  replyToTweet: (name, id, msg) => {
    return new Promise((res, rej) => {
      let params = {
        status: "@" + name + " " + msg,
        in_reply_to_status_id: id,
      };
      twit.post("statuses/update", params, (err, data) => {
        if (err) {
          return rej(err);
        }
        return res(data);
      });
    });
  },
  retweet: (id) => {
    return new Promise((res, rej) => {
      let params = {
        id,
      };
      twit.post("statuses/retweet/:id", params, (err, data) => {
        if (err) {
          return rej(err);
        }
        return res(data);
      });
    });
  },
  like: (id) => {
    return new Promise((res, rej) => {
      let params = {
        id,
      };
      twit.post("favorites/create", params, (err, data) => {
        if (err) {
          return rej(err);
        }
        return res(data);
      });
    });
  },
  deleteTweet: (id) => {
    return new Promise((res, rej) => {
      let params = {
        id,
      };
      twit.post("statuses/destroy/:id", params, (err, data) => {
        if (err) {
          return rej(err);
        }
        return res(data);
      });
    });
  },
  unretweet: (id) => {
    return new Promise((res, rej) => {
      let params = {
        id,
      };
      twit.post("statuses/unretweet/:id", params, (err, data) => {
        if (err) {
          return rej(err);
        }
        return res(data);
      });
    });
  },
  unlike: (id) => {
    return new Promise((res, rej) => {
      let params = {
        id,
      };
      twit.post("favorites/destroy", params, (err, data) => {
        if (err) {
          return rej(err);
        }
        return res(data);
      });
    });
  },
};
