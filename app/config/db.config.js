const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
} = process.env;
module.exports = {
  // url: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
  url: "mongodb+srv://ctseuser:ctseuser@cluster0.9yzr6.mongodb.net/inventory?retryWrites=true&w=majority"
};
