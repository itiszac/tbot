const {
  relationship,
  followUser,
  unfollowUser,
  getFollowers,
} = require("../friends");
const { getTweets, like } = require("../tweet");
const { getHashtag, getRandomNum, timeout } = require("../utils");
const {BASE_TIMEOUT} = require("../constants");

var newly_followed = [];
var last_liked_id = "";

const likePosts = async (ht) => {
  const num = getRandomNum(Number(process.env.MIN_ACTIONS), Number(process.env.MAX_ACTIONS));
  const data = await getTweets(ht, num);
  const tweets = data.statuses;
  for await (let tweet of tweets) {
    try {
      if (last_liked_id === tweet.id_str) {
        console.log("Already liked the most current post...");
        return;
      }
      await timeout(BASE_TIMEOUT);
      await like(tweet.id_str);
      last_liked_id = tweet.id_str;
      console.log("Liked this tweet: " + tweet.id_str);
    } catch (e) {
      console.log("unsuccessful like " + tweet.id_str);
    }
  }
};

const followUsers = async (ht, screen_name) => {
  const num = getRandomNum(Number(process.env.MIN_ACTIONS), Number(process.env.MAX_ACTIONS));
  const data = await getTweets(ht, num);
  const tweets = data.statuses;
  for await (let tweet of tweets) {
    try {
      await timeout(BASE_TIMEOUT);
      if (newly_followed.length > 25) {
        // only following 25 people every 24 hours for now..
        await timeout(60000);
      }
      const friend = await relationship(screen_name, tweet.user.screen_name);
      if (friend.relationship.source.following === true) {
        console.log("Already follow this user: " + tweet.user.screen_name);
      } else {
        await followUser(tweet.user.screen_name);
        newly_followed.push(tweet.user.screen_name);
        console.log("Successfully followed: " + tweet.user.screen_name);
      }
    } catch (e) {
      console.log("Unsuccessful follow: " + tweet.user.screen_name);
    }
  }
};

const unfollowUsers = async (screen_name) => {
  const followers = await getFollowers(screen_name);
  var i = getRandomNum(Number(process.env.MIN_ACTIONS), Number(process.env.MAX_ACTIONS));
  for await (let follower of followers.users) {
    try {
      if (i < 0) break;
      await timeout(BASE_TIMEOUT);
      const friend = await relationship(screen_name, follower.screen_name);
      if (
        friend.relationship.source.followed_by === true ||
        newly_followed.indexOf(follower.screen_name) > -1
      ) {
        console.log("User follows you:", follower.screen_name);
      } else {
        await unfollowUser(follower.screen_name);
        console.log("Unfollowing the user:", follower.screen_name);
      }
      --i;
    } catch (e) {
      console.log("Failed to unfollow...");
    }
  }
};

module.exports = {
  actions: async (action) => {
    try {
      switch (action) {
        case 0:
          {
            // like a post
            let ht = getHashtag();
            console.log("Liking posts in:", ht);
            likePosts(ht);
          }
          break;
        case 1:
          {
            // follow user
            // let ht = getHashtag();
            // console.log("Following users posting in:", ht);
            // followUsers(ht, process.env.MY_TWITTER_HANDLE);
            // just gonna make this another random timeout for now
            await timeout(getRandomNum(150000, 600000));
          }
          break;
        case 2:
          {
            // unfollow users who don't follow me
            // or who i haven't recently followed
            // unfollowUsers(process.env.MY_TWITTER_HANDLE);
            // just gonna make this another random timeout for now
            await timeout(getRandomNum(150000, 600000));
          }
          break;
      }
    } catch (e) {
      console.error(e);
    }
  },
};
