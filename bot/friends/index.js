const twit = require("../twit");

module.exports = {
  relationship: (screen_name, target_screen_name) => {
    return new Promise((res, rej) => {
      let params = {
        source_screen_name: screen_name,
        target_screen_name,
      };
      twit.get("friendships/show", params, (err, data) => {
        if (err) {
          return rej(err);
        }
        return res(data);
      });
    });
  },
  followUser: (screen_name) => {
    return new Promise((res, rej) => {
      let params = {
        screen_name,
      };
      twit.post("friendships/create", params, (err, data) => {
        if (err) {
          return rej(err);
        }
        return res(data);
      });
    });
  },
  unfollowUser: (screen_name) => {
    return new Promise((res, rej) => {
      let params = {
        screen_name,
      };
      twit.post("friendships/destroy", params, (err, data) => {
        if (err) {
          return rej(err);
        }
        return res(data);
      });
    });
  },
  getFollowers: (screen_name) => {
    return new Promise((res, rej) => {
      let params = {
        screen_name,
        skip_status: true,
      };
      twit.get("friends/list", params, (err, data) => {
        if (err) {
          return rej(err);
        }
        return res(data);
      });
    });
  },
};
