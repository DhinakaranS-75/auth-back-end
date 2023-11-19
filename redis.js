const redis = require("redis");

const redisClient = () => {
  return redis.createClient({
    url: "rediss://red-cld39ieg1b2c73f3j7b0:xPcllaoPiAvANkh5L4tCchYgsmZKdO1t@oregon-redis.render.com:6379",
  });
};

const client = redisClient();

client.on("error", (err) => {
  console.log(err);
});

client.on("connect", () => {
  console.log("Connected to Redis");
});

client.on("end", () => {
  console.log("Redis Connection Ended");
});

client.on("end", () => {
  console.log("Redis Connection Ended");
});

client.on("SIGTERM", () => {
  client.quit();
});

module.exports = client;
