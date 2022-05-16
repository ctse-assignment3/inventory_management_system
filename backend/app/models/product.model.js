module.exports = (mongoose, mongoosePaginate) => {
  var schema = mongoose.Schema(
    {
        name: String,
        description: String,
        country : String,
        quantities : String,
        price : String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  schema.plugin(mongoosePaginate);

  const Product = mongoose.model("product", schema);
  return Product;
};
